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
          </div>
        ))}
    </div>
  );
}

export default Videos;
