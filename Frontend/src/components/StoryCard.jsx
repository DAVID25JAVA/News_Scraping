// src/components/StoryCard.jsx

import Button from "./ui/Button";

function StoryCard() {
  return (
    <div className="group bg-white border border-gray-200 rounded-3xl p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300">
      {/* TOP */}

      <div className="flex items-start justify-between gap-5">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-black text-white text-xs px-3 py-1 rounded-full">
              TRENDING
            </span>

            <span className="text-sm text-gray-500">
              🔥 245 Points
            </span>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 leading-snug group-hover:text-black transition">
            OpenAI launches a powerful new reasoning model for developers
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Developers are discussing the latest advancements in AI
            reasoning systems and how they impact modern software
            development.
          </p>
        </div>

        <Button className="whitespace-nowrap">
          Bookmark
        </Button>
      </div>

      {/* BOTTOM */}

      <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-gray-500 border-t pt-5">
        <span>👨 johndoe</span>
        <span>🕒 2 hours ago</span>
        <span>💬 42 comments</span>
      </div>
    </div>
  );
}

export default StoryCard;