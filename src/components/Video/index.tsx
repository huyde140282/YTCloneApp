import { VideoProps } from '@/shared/types';
import ReactPlayer from 'react-player';
import React, { useEffect, useRef, useState } from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const Video: React.FC<VideoProps> = ({ video }) => {
  const { title, videoUrl, sharedBy, likes, dislikes, description } = video;
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Resize the player element when the window is resized
    const resizePlayer = () => {
      const playerElement = playerRef.current;
      if (playerElement) {
        const width = playerElement.offsetWidth;
        playerElement.style.height = `${(width * 9) / 16}px`;
      }
    };

    // Add resize event listener and invoke the resizePlayer function
    window.addEventListener('resize', resizePlayer);
    resizePlayer();

    // Cleanup: remove the resize event listener
    return () => {
      window.removeEventListener('resize', resizePlayer);
    };
  }, []);

  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center hover:bg-[#4c426e] bg-transparent py-2 p-4 rounded-lg cursor-pointer mb-2">
      <div className="w-full md:w-1/2 aspect-w-16 aspect-h-9 mr-4">
        {/* Render the video player */}
        <div
          className="relative rounded-lg overflow-hidden transition-height duration-300"
          ref={playerRef}
        >
          <ReactPlayer
            url={videoUrl}
            controls
            width="100%"
            height="100%"
            className="rounded-lg"
            config={{
              youtube: {
                playerVars: {
                  modestbranding: 1,
                  controls: 1,
                },
              },
            }}
          />
        </div>
      </div>
      <div className="w-full mt-2 md:mt-0 md:w-1/2 video-info">
        {/* Render the video information on the right */}
        <h2 className="text-lg font-bold text-white">{title}</h2>
        <p className="text-base text-white font-bold">
          Shared by: <span className="text-base text-gray-300">{sharedBy}</span>
        </p>
        <div className="flex mt-2 gap-2">
          <div className="flex items-center">
            <FaThumbsUp className="text-sm mr-1 text-white" />
            <p className="text-sm text-gray-300">{likes}</p>
          </div>
          <div className="flex items-center">
            <FaThumbsDown className="text-sm mr-1 text-white" />
            <p className="text-sm text-gray-300">{dislikes}</p>
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-300">Description:</p>
        <p className="mt-2 text-sm text-gray-300 overflow-hidden overflow-ellipsis line-clamp-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Video;
