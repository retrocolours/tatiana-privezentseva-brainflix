import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import VideoDetails from "../../components/VideoDetails/VideoDetails";
import Comments from "../../components/Comments/Comments";

import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Videos from "../../components/Videos/Videos";

import axios from "axios";

export const api = "http://localhost:6848"; //local host 8080

function Home() {
  const [videos, setVideoData] = useState([]); //array of videos
  const [selectedVideo, setSelectedVideo] = useState({}); //single video
  const { videoId } = useParams();

  useEffect(() => {
    // axios.get("http://localhost:8080/videos").then((response) => {
    //   console.log(response);
    // });
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
      .get(`${api}/videos/${videoId}`)
      .then((response) => {
        setSelectedVideo(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  function getVideos() {
    axios
      .get("http://localhost:6848/videos")
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
          <VideoDetails selectedVideo={selectedVideo} />
          <Comments selectedVideoComments={selectedVideo.comments} />
        </div>
        <Videos videos={videos} selectedVideo={selectedVideo} />
      </div>
    </>
  );
}

export default Home;
