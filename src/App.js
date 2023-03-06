import { useState } from "react";

import Header from "./components/Header/Header.js";
import Hero from "./components/Hero/Hero.js";
import Comments from "./components/Comments/Comments.js";

import VideoPlayer from "./components/VideoPlayer/VideoPlayer.js";
import Videos from "./components/Videos/Videos.js";

import videoData from "./assets/Data/video-details.json";
import videosList from "./assets/Data/videos.json";
import "./App.scss";

function App() {
  const [videos, setVideoData] = useState(videosList); //array of vids
  const [selectedVideo, setSelectedVideo] = useState(videoData[0]); //single vid

  const handleVideoClick = (id) => {
    const newVideo = videoData.find((video) => video.id === id);
    setSelectedVideo(newVideo);
  };

  return (
    <>
      <Header />
      <VideoPlayer selectedVideo={selectedVideo} />
      <div className="wrapper">
        <div className="container">
          <Hero selectedVideo={selectedVideo} />
          <Comments selectedVideoComments={selectedVideo.comments} />
        </div>
        <Videos
          videos={videos}
          selectedVideo={selectedVideo}
          handleVideoClick={handleVideoClick}
        />
      </div>
    </>
  );
}

export default App;
