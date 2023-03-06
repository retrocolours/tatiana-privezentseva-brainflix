import "./Videos.scss";

function Videos(props) {
  return (
    <section className="videos">
      <h2 className="videos__title">Next Videos</h2>

      {props.videos
        .filter((video) => video.id !== props.selectedVideo.id)
        .map((video) => (
          <div className="videos__box">
            <div
              className="videos__picture"
              key={video.id}
              onClick={() => props.handleVideoClick(video.id)}
            >
              <img className="videos__image" src={video.image} />
            </div>
            <div className="videos__info">
              <p className="videos__name">{video.title}</p>
              <p className="videos__channel">{video.channel}</p>
            </div>
          </div>
        ))}
    </section>
  );
}

export default Videos;
