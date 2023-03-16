import "./VideoPlayer.scss";
import { api } from "../../pages/Home/Home";

function VideoPlayer({ selectedVideo }) {
  return (
    <video
      className="video"
      controls
      poster={`${api}/${selectedVideo.image}`}
      alt="video"
    ></video>
  );
}

export default VideoPlayer;
