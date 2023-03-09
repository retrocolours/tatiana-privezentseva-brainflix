import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Hero from "../../components/Hero/Hero";
import Comments from "../../components/Comments/Comments";

import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Videos from "../../components/Videos/Videos";

import axios from "axios";

const APIKey = "936f21f8-40f8-4c80-bb61-833290fc9c15";
const api = "https://project-2-api.herokuapp.com";

function Home() {
  const [videos, setVideoData] = useState([]); //array of videos
  const [selectedVideo, setSelectedVideo] = useState({}); //single video
  const { videoId } = useParams();

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    if (videoId) {
      getVideo(videoId);
    } else if (videos.length) {
      getVideo(videos[0].id);
    }
  }, [videoId, videos]);

  function getVideo(videoId) {
    axios
      .get(`${api}/videos/${videoId}?api_key=${APIKey}`)
      .then((response) => {
        setSelectedVideo(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  function getVideos() {
    axios
      .get(`${api}/videos?api_key=${APIKey}`)
      .then((response) => {
        setVideoData(response.data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  }

  return (
    <>
      <VideoPlayer selectedVideo={selectedVideo} />
      <div className="wrapper">
        <div className="container">
          <Hero selectedVideo={selectedVideo} />
          <Comments selectedVideoComments={selectedVideo.comments} />
        </div>
        <Videos videos={videos} selectedVideo={selectedVideo} />
      </div>
    </>
  );
}

export default Home;
