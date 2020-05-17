import React, { useState, useRef, useEffect } from "react";
import YouTubeAPI, { baseParams } from "../api/YouTubeAPI";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const divStyle = {
  display: "flex",
};

const buttonStyle = {
  marginRight: 20,
  paddingRight: 30,
  paddingLeft: 30,
  height: 31,
  marginTop: 10,
};

const Page1 = () => {
  const [roundedBorders, setRoundedBorders] = useState(true);
  const [inputDisplay, setInputDisplay] = useState("");
  const [youTubeData, setYouTubeData] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showSelectedVideo, setShowSelectedVideo] = useState(false);
  const [loading, setLoading] = useState(false);
  const node = useRef();

  const inputStyle = {
    width: "-webkit-fill-available",
    margin: 10,
    borderRadius: roundedBorders ? 10 : "",
    border: "1px solid black",
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 20,
  };

  useEffect(() => {
    document.addEventListener("mousedown", onInputClickOutside);
    return () => {
      document.removeEventListener("mousedown", onInputClickOutside);
    };
  }, []);

  const onInputClick = (event) => {
    setInputDisplay(event.target.value);
  };

  const onInputClickInside = () => {
    setRoundedBorders(false);
  };

  const onInputClickOutside = () => {
    setRoundedBorders(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(inputDisplay);
  };

  const onFormSubmit = async (inputDisplay) => {
    setLoading(true);
    const response = await YouTubeAPI.get("/search", {
      params: {
        ...baseParams,
        q: inputDisplay,
      },
    })
      .then(() => {
        console.log(response);
        setYouTubeData(response.data.items);
        setLoading(false);
      })
      .catch((error) => {
        alert(error);
        setLoading(false);
      });
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
    setShowSelectedVideo(true);
    // console.log("From the app", video);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "50%" }}>
        <form onSubmit={handleSubmit} style={divStyle}>
          <input
            style={inputStyle}
            onChange={onInputClick}
            onClick={onInputClickInside}
            ref={node}
            value={inputDisplay}
            placeholder="Search for a video..."
          />
          <button style={buttonStyle}>Search</button>
        </form>
        <div
          style={{
            height: 20,
            maxHeight: 20,
            textAlign: "center",
            paddingTop: 10,
          }}
        >
          {" "}
          {loading && <span>LOADING...</span>}{" "}
        </div>
        <VideoList videos={youTubeData} onVideoSelect={onVideoSelect} />
      </div>
      {showSelectedVideo && (
        <div
          style={{
            marginTop: 69,
            border: "1px solid black",
            marginLeft: 15,
            width: "40%",
            height: "fit-content",
            maxHeight: 600,
          }}
        >
          <VideoDetail video={selectedVideo} />
        </div>
      )}
    </div>
  );
};

export default Page1;
