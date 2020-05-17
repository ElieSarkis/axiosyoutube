import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  } else {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <img
            src={video.snippet.thumbnails.medium.url}
            width="400"
            height="250"
            style={{ marginTop: "6%", marginLeft: "13%" }}
          />
        </div>
        <span style={{ textAlign: "center", paddingTop: 20 }}>
          {" "}
          {video.snippet.channelTitle}{" "}
        </span>
        <span
          style={{
            textAlign: "center",
            paddingTop: 20,
            paddingLeft: 3,
            paddingRight: 3,
            paddingBottom: 10,
          }}
        >
          {video.snippet.description}
        </span>
      </div>
    );
  }
};

export default VideoDetail;
