import React from "react";
import Video from "../Video";
import { VideoListProps } from "@/shared/types";

const VideoList: React.FC<VideoListProps> = ({ videos }) => {
  return (
    <div className="flex justify-center">
      <div className="w-1/2">
        {videos.map((video, index) => (
          <Video key={index} video={video} />
        ))}
      </div>
    </div>
  );
};

export default VideoList;
