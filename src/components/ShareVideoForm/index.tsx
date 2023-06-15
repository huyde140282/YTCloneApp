import React, { useState } from "react";
import { ShareYouTubeVideoProps } from "./types";
import { isYouTubeVideoUrlValid } from "./module/validation";

const ShareVideoForm: React.FC<ShareYouTubeVideoProps> = ({ onShareVideo }) => {
  const [videoUrl, setVideoUrl] = useState("");

  const handleShare = (event: React.FormEvent) => {
    event.preventDefault();
    if (isYouTubeVideoUrlValid(videoUrl)) {
      onShareVideo(videoUrl);
      setVideoUrl("");
    } else {
      // Handle invalid YouTube video URL
      console.log("Invalid YouTube video URL");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVideoUrl(event.target.value);
  };

  return (
    <form className="w-1/2 mx-auto my-auto">
      <fieldset className="border p-8">
        <legend className="text-lg font-semibold">Share a Youtube movie</legend>
        <div className="flex flex-col items-center gap-7">
          <input
            type="text"
            className="flex-grow px-2 py-2 border rounded-md text-black w-full"
            placeholder="Enter your Youtube Url"
            value={videoUrl}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md w-full shadow-md"
            onClick={handleShare}
          >
            Share
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default ShareVideoForm;
