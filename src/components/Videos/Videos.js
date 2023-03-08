import "./Videos.scss";
import { Link } from "react-router-dom";

function Videos(props) {
  return (
    <section className="videos">
      <h2 className="videos__title">Next Videos</h2>

      {props.videos
        .filter((video) => video.id !== props.selectedVideo.id)
        .map((video) => (
          <Link className="videos__box" key={video.id} to={`/videos/${video.id}`}>
      
              <div
                className="videos__picture"

                //onClick={() => props.handleVideoClick(video.id)}
              >
                <img className="videos__image" src={video.image} />
              </div>
              <div className="videos__info">
                <p className="videos__name">{video.title}</p>
                <p className="videos__channel">{video.channel}</p>
              </div>
  
          </Link>
        ))}
    </section>
  );
}

export default Videos;
