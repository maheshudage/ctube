"use client";

import React from "react";

const VideoCard = () => {
  return (
    <div className="bg-black text-white w-full min-h-screen">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">

        {/* MAIN VIDEO SECTION */}
        <div className="md:col-span-2 flex flex-col gap-4">

          {/* VIDEO */}
          <div className="border border-gray-700 rounded-lg overflow-hidden">

            {/* FIXED ASPECT RATIO (NO PLUGIN REQUIRED) */}
            <div className="relative w-full pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="video player"
                allowFullScreen
              />
            </div>

          </div>

          {/* TITLE + DETAILS */}
          <div className="flex flex-col gap-2 px-2">

            <h1 className="text-lg md:text-xl font-semibold">
              Title of the video which was uploaded on this platform
            </h1>

            <hr className="border-gray-700" />

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

              {/* LEFT SIDE */}
              <div className="flex items-center gap-4">

                <div className="w-12 h-12 bg-yellow-400 rounded-full" />

                <div>
                  <p className="font-semibold">Channel Name</p>
                  <p className="text-xs text-gray-400">
                    1 Million Subscribers
                  </p>
                </div>

                <button className="bg-white text-black px-4 py-1.5 rounded-full text-sm">
                  Subscribe
                </button>

              </div>

              {/* RIGHT SIDE */}
              <button className="bg-white text-black px-4 py-1.5 rounded-full text-sm">
                Like
              </button>

            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="bg-gray-900 p-4 rounded-lg">

            <p className="text-xs text-gray-400">
              1M views • Uploaded on Oct 28, 2024
            </p>

            <p className="text-sm mt-2">
              This is the video description section. Add information about the video here.
            </p>

          </div>

        </div>

        {/* SIDEBAR */}
        <div className="space-y-4">

          <h2 className="text-lg font-semibold">
            Related Videos
          </h2>

          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex gap-3 cursor-pointer">

              <div className="w-24 h-16 bg-gray-800 rounded-md flex-shrink-0" />

              <div className="flex flex-col">

                <h3 className="text-sm font-semibold line-clamp-2">
                  Related Video Title
                </h3>

                <p className="text-xs text-gray-400">
                  Channel Name
                </p>

                <p className="text-xs text-gray-400">
                  123K views • 1 month ago
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default VideoCard;