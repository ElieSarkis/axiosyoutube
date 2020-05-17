import React from "react";

const listStyle = {
  listStyle: "none",
};

const divStyle = {
  border: "1px solid black",
  height: 120,
  display: "flex",
  width: "90%",
  marginBottom: 15,
  cursor: "pointer",
  borderRadius: 15,
};

const divStyle2 = {
  display: "flex",
  flexDirection: "column",
};

const imgStyle = {
  padding: 20,
};

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)}>
      <li style={listStyle}>
        <div style={divStyle}>
          {" "}
          <img
            src={video.snippet.thumbnails.medium.url}
            height="80"
            width="142"
            style={imgStyle}
          />
          <div style={divStyle2}>
            <div style={{ paddingTop: 20, fontWeight: "bold" }}>
              {video.snippet.channelTitle}
            </div>
            <div style={{ paddingTop: 15 }}>{video.snippet.title}</div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default VideoItem;
