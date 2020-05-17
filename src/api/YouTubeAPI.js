import axios from "axios";

export const baseParams = {
  part: "snippet",
  maxResults: 5,
  key: "AIzaSyAlMmYKMP9a8DVXQkD05QIFcNav5svU7ts",
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
