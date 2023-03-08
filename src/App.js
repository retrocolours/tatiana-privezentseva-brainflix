import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Header from "./components/Header/Header.js";
// import Hero from "./components/Hero/Hero.js";
// import Comments from "./components/Comments/Comments.js";

// import VideoPlayer from "./components/VideoPlayer/VideoPlayer.js";
// import Videos from "./components/Videos/Videos.js";

// import videoData from "./assets/Data/video-details.json";
// import videosList from "./assets/Data/videos.json";
import Home from "./pages/Home/Home";
import Upload from "./pages/Upload/Upload";

import "./App.scss";
// import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Videos from "./components/Videos/Videos"

function App() {
  // const [videos, setVideoData] = useState(videosList); //array of vids
  // const [selectedVideo, setSelectedVideo] = useState(videoData[0]); //single vid

  // const handleVideoClick = (id) => {
  //   const newVideo = videoData.find((video) => video.id === id);
  //   setSelectedVideo(newVideo);
  // };

  return (
    <>
      <BrowserRouter>
 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="videos/:videoId" element={<Home/>} />
        </Routes>
        {/* <Header />
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
        </div> */}
      </BrowserRouter>
    </>
  );
}

export default App;
