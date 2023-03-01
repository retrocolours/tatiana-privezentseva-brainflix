import "./VideoPlayer.scss";

function VideoPlayer(props) {
  return (
    <video
      className="video"
      controls
      poster={props.selectedVideo.image}
      // src="https://project-2-api.herokuapp.com/stream"
    ></video>
  );
}

export default VideoPlayer;
