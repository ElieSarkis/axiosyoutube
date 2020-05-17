import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <div>
      <ul>
        {videos.map((video) => {
          return <VideoItem video={video} onVideoSelect={onVideoSelect} />;
        })}
      </ul>
    </div>
  );
};

export default VideoList;
