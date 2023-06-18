import React from 'react';
import { VideoListProps } from '@/shared/types';
import VideoComponent from '../Video';
import LoadingSpinner from '@/atoms/LoadingSpinner';
import { ToastContainer } from 'react-toastify';

const VideoList: React.FC<VideoListProps> = (props) => {
  const { videos, loading } = props;
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex justify-center">
      <ToastContainer />
      <div className="w-2/3 lg:w-1/2">
        {videos && videos.length > 0 ? (
          videos.map((video, index) => (
            <VideoComponent key={index} video={video} />
          ))
        ) : (
          <div className="flex justify-center items-start h-screen">
            <p className="text-center text-2xl text-white">
              No videos available
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoList;
