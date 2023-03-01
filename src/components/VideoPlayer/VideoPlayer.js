import "./VideoPlayer.scss";


function VideoPlayer () {
return (
<video
        className="video"
        controls
        poster="https://i.imgur.com/l2Xfgpl.jpg"
        src="https://project-2-api.herokuapp.com/stream"
      ></video>
)
    }


export default VideoPlayer;