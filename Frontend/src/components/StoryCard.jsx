import { useEffect, useState } from "react";
import Button from "./ui/Button";
import { getStories } from "../services/story.service";
import toast from "react-hot-toast";
import Loading from "./UI/Loading";
import moment from "moment";
import { Link } from "react-router-dom";

function StoryCard() {
  const [stories, setStories] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchStories = async () => {
    setLoading(true);
    try {
      const res = await getStories(page, 5);
      console.log(res);
      setStories(res || []);
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStories();
  }, [page]);

  return (
    <div className="space-y-6">
      {/* STORIES */}
      {loading ? (
        <Loading />
      ) : (
        stories?.stories?.map((story) => (
          <div
            key={story._id}
            className="group bg-white border border-gray-200 rounded-3xl p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300"
          >
            <div className="flex items-start justify-between gap-5">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-black text-white text-xs px-3 py-1 rounded-full">
                    STORY
                  </span>

                  <span className="text-sm text-gray-500">
                    🔥 {story.points} Points
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 leading-snug">
                  {story.title}
                </h2>

                <a
                  href={story.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 text-sm break-all"
                >
                  {story.url}
                </a>
              </div>

              <Link
                to={`/story-details/${story?._id}`}
                className="bg-black text-white px-5 py-2 rounded-xl"
              >
                View
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-gray-500 border-t pt-5">
              <span>👨 {story.author}</span>
              <span>🕒 {moment(story.postedAt?.split(" ")[0]).fromNow()}</span>
            </div>
          </div>
        ))
      )}

      <div className="flex justify-center gap-4 mt-10">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
        >
          Prev
        </button>

        <span className="px-4 py-2 font-semibold">Page {page}</span>

        <button
          disabled={page * stories?.limit >= stories?.total}
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 bg-black text-white rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default StoryCard;
