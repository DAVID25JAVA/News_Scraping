import React from "react";

function Loading() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>

        <p className="text-gray-600 text-sm font-medium">Loading...</p>
      </div>
    </div>
  );
}

export default Loading;
