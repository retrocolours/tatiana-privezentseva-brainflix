import "./VideoPlayer.scss";

function VideoPlayer(props) {
  return (
    <video
      className="video"
      controls
      poster={props.selectedVideo.image}
    ></video>
  );
}

export default VideoPlayer;
