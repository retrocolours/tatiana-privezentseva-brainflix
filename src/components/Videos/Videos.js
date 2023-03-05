import "./Videos.scss";

function Videos(props) {
  return (
    <section className="videos">
    <h2 className="videos__title">Next Videos</h2>
    <div className="videos__cards">
    <div className="videos__box">
      {props.videos
        .filter((video) => video.id !== props.selectedVideo.id)
        .map((video) => (
          <div key={video.id} onClick={() => props.handleVideoClick(video.id)}>
         
            <img className="videos__image" src={video.image} />
          <div className="videos__info">
            <p>{video.title}</p>
            <p>{video.channel}</p>
            </div>
            </div>
      
        ))}
    </div>
    </div>
    </section>
  );
}

export default Videos;
