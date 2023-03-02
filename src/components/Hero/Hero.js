import "./Hero.scss";

function Hero(props) {

  return (
    <section className="hero">
      <h1 className="hero__title">{props.selectedVideo.title}</h1>
<div className="hero__info-1">
      <p className="hero__name">By {props.selectedVideo.channel}</p>
      <p>{props.selectedVideo.views}</p>
      
      </div>
      <div className="hero__info-2">
    
      <p>{props.selectedVideo.timestamp}</p>
      <p>{props.selectedVideo.likes}</p>
</div>
      <p>{props.selectedVideo.description}</p>
    </section>
  );
}

export default Hero;
