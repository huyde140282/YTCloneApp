import { VideoProps } from "@/shared/types";
import ReactPlayer from 'react-player';
import React from "react";

const Video: React.FC<VideoProps> = ({ video }) => {
  const { title, videoUrl, sharedBy, likes, dislikes, description } = video;

  return (
    <div className="flex items-start mb-4">
      <div className="w-1/2 mr-4">
        {/* Render the video player */}
        <ReactPlayer
          url={videoUrl}
          controls
          width="100%"
          height="auto"
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
      <div className="w-1/2">
        {/* Render the video information on the right */}
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-500">Shared by: {sharedBy}</p>
        <div className="flex justify-between mt-2">
          <p>Likes: {likes}</p>
          <p>Dislikes: {dislikes}</p>
        </div>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Video;
