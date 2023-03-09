import "./Hero.scss";

function Hero(props) {
  return (
    <section className="hero">
      <h1 className="hero__title">{props.selectedVideo.title}</h1>
      <div className="hero__container">
        <div className="hero__info-1">
          <p className="hero__name">By {props.selectedVideo.channel}</p>
          <p className="hero__date">
            {new Date(props.selectedVideo.timestamp).toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              }
            )}
          </p>
        </div>
        <div className="hero__info-2">
          <p className="hero__likes">{props.selectedVideo.likes}</p>
          <p className="hero__views">{props.selectedVideo.views}</p>
        </div>
      </div>
      <p className="hero__description">{props.selectedVideo.description}</p>
    </section>
  );
}

export default Hero;
