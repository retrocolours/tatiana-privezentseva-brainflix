import { useState } from "react";

import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Comments from "../../components/Comments/Comments"

import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Videos from "../../components/Videos/Videos";

import videoData from "../../assets/Data/video-details.json";
import videosList from "../../assets/Data/videos.json";

function Home() {
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

export default Home;
