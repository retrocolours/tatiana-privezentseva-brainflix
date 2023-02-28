import "./Hero.scss";

function Hero() {
  return (
    <section className="hero">
      <video
        className="hero__video"
        controls
        poster="https://i.imgur.com/l2Xfgpl.jpg"
        src="https://project-2-api.herokuapp.com/stream"
      ></video>
      <h1>BMX Rampage: 2021 Highlights</h1>
      <ul>
        <li>By Red Crow</li>
        <li>07/11/2021</li>
        <li>1,001,023</li>
        <li>110,985</li>
      </ul>
      <p>
        On a gusty day in Southern Utah, a group of 25 daring mountain bikers
        blew the doors off what is possible on two wheels, unleashing some of
        the biggest moments the sport has ever seen. While mother nature only
        allowed for one full run before the conditions made it impossible to
        ride, that was all that was needed for event veteran Kyle Strait, who
        won the event for the second time -- eight years after his first Red Cow
        Rampage title
      </p>
      <p>3 comments</p>
    </section>
  );
}

export default Hero;
