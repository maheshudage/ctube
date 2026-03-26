import React from "react";

const videos = new Array(10).fill(0).map((_, i) => ({
  id: i,
  title: "Title of the video",
  channel: "Channel Name",
  duration: "7:23",
}));

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen p-4 flex">
      {/* Left Section */}
      <div className="w-2/3 pr-4">
        <div className="bg-gray-700 h-80 rounded-lg mb-4"></div>

        <h2 className="text-lg font-semibold mb-2">
          Title of the video uploaded by the channel
        </h2>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-500 rounded-full"></div>
            <div>
              <p className="font-medium">Channel Name</p>
              <p className="text-sm text-gray-400">13M subscribers</p>
            </div>
            <button className="ml-4 bg-white text-black px-4 py-1 rounded-full">
              Subscribe
            </button>
          </div>
          <button className="bg-gray-700 px-4 py-1 rounded-full">
            Like
          </button>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg mb-4">
          Video description goes here...
        </div>

        <h3 className="mb-2">Comments</h3>
        {[1, 2].map((c) => (
          <div key={c} className="flex gap-3 mb-3">
            <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
            <div>
              <p className="text-sm font-medium">Channel Name</p>
              <p className="text-sm text-gray-400">
                This is a comment that was posted in this video
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Section */}
      <div className="w-1/3">
        <div className="mb-4">
          <h3 className="mb-2">Recommended</h3>
          {videos.map((video) => (
            <div key={video.id} className="flex gap-2 mb-3">
              <div className="w-32 h-20 bg-gray-700 rounded"></div>
              <div>
                <p className="text-sm font-medium">{video.title}</p>
                <p className="text-xs text-gray-400">{video.channel}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Box */}
        <div className="bg-gray-900 p-3 rounded-lg mb-4 h-64 flex flex-col justify-between">
          <div className="space-y-2 overflow-y-auto">
            <p className="text-sm">💬 This is so funny!</p>
            <p className="text-sm">🔥 Amazing content</p>
          </div>
          <input
            placeholder="Type your message..."
            className="mt-2 p-2 bg-gray-800 rounded text-sm"
          />
        </div>

        {/* Queue */}
        <div className="bg-gray-900 p-3 rounded-lg">
          <h3 className="mb-2">Up Next</h3>
          {videos.slice(0, 5).map((video) => (
            <div key={video.id} className="flex justify-between items-center mb-2">
              <p className="text-sm">{video.title}</p>
              <button className="bg-gray-700 px-2 py-1 text-xs rounded">
                Add
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
