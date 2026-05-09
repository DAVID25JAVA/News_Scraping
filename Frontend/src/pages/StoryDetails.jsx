import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import toast from "react-hot-toast";
// import {Bookmark} from 'lucide-react'
import {
  Bookmark,
  BookmarkCheck,
  ExternalLink,
  Flame,
  User,
  Clock,
  ArrowLeft,
} from "lucide-react";
import Wrapper from "../components/Wrapper";
import Loading from "../components/UI/Loading";
import { getStoryById, toggleBookmark } from "../services/story.service";
import { useAuth } from "../context/AuthContext";

function StoryDetails() {
  const { id } = useParams();
  const { user } = useAuth();
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bookmarkLoading, setBookmarkLoading] = useState(false);

  const fetchStory = async () => {
    try {
      const res = await getStoryById(id);
      setStory(res.story || res.data || res);
    } catch (error) {
      toast.error(error?.message || "Failed to load story");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStory();
  }, [id]);

  const handleBookmark = async () => {
    if (!user) {
      toast.error("Please login to bookmark stories");
      return;
    }
    try {
      setBookmarkLoading(true);
      const res = await toggleBookmark(id);
      toast.success(res.message || "Bookmark updated");
      setStory((prev) => ({ ...prev, isBookmarked: !prev.isBookmarked }));
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
    } finally {
      setBookmarkLoading(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <Wrapper>
      <div className="py-10 px-4">
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 mb-6 transition"
        >
          <ArrowLeft size={15} />
          Back to stories
        </button>

        <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm max-w-3xl mx-auto">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-black text-white text-xs font-semibold tracking-widest px-3 py-1 rounded-full uppercase">
                  Story
                </span>
                <span className="flex items-center gap-1 text-sm text-orange-500 font-medium">
                  <Flame size={14} />
                  {story?.points ?? 0} pts
                </span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 leading-snug">
                {story?.title || "Untitled"}
              </h1>
            </div>

            <button
              onClick={handleBookmark}
              disabled={bookmarkLoading}
              className={`shrink-0 p-2.5 rounded-xl border transition disabled:opacity-50 disabled:cursor-not-allowed ${
                story?.isBookmarked
                  ? "bg-amber-50 border-amber-300 text-amber-500"
                  : "bg-gray-50 border-gray-200 text-gray-400 hover:bg-amber-50 hover:border-amber-300 hover:text-amber-500"
              }`}
              title={
                !user
                  ? "Login to bookmark"
                  : story?.isBookmarked
                  ? "Remove bookmark"
                  : "Bookmark"
              }
            >
              {story?.isBookmarked ? (
                <BookmarkCheck size={20} />
              ) : (
                <Bookmark size={20} />
              )}
            </button>
          </div>

          <hr className="my-6 border-gray-100" />

          {story?.url && (
            <a
              href={story.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:underline text-sm break-all"
            >
              <ExternalLink size={14} className="shrink-0" />
              {story.url}
            </a>
          )}

          <p className="mt-6 text-gray-600 leading-relaxed">
            {story?.description ||
              "This story was scraped from Hacker News and stored in the database using your MERN stack scraper system."}
          </p>

          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-4 text-sm text-gray-500">
            {story?.author && (
              <span className="flex items-center gap-1.5">
                <User size={14} />
                {story.author}
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {story?.postedAt
                ? moment(story.postedAt.split(" ")[0]).fromNow()
                : "N/A"}
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default StoryDetails;
