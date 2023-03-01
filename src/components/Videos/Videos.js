import "./Videos.scss";

function Videos(props) {
  return (
    <div>
      {props.videos
        .filter((video) => video.id !== props.selectedVideo.id)
        .map((video) => (
          <div key={video.id} onClick={() => props.handleVideoClick(video.id)}>
            <h2>{video.title}</h2>
            <p>{video.channel}</p>
            <img className="videos__image" src={video.image} />
            {/* <p>{video.description}</p> */}
            <p>{video.views}</p>
            <p>{video.likes}</p>
            <p>{video.duration}</p>
            <video src={video.video}></video>
            <p>{video.timestamp}</p>
          </div>
        ))}
    </div>
  );
}

export default Videos;
