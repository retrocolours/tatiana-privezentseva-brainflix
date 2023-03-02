import "./Hero.scss";

function Hero(props) {
  console.log(props);
  return (
    <section className="hero">
      <h1>{props.selectedVideo.title}</h1>

      <p>{props.selectedVideo.channel}</p>
      <p>{props.selectedVideo.timestamp}</p>
      <p>{props.selectedVideo.views}</p>
      <p>{props.selectedVideo.likes}</p>

      <p>{props.selectedVideo.description}</p>
    </section>
  );
}

export default Hero;
