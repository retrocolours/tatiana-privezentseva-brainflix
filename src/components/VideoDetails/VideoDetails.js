import "./VideoDetails.scss";

function VideoDetails({ selectedVideo }) {
  return (
    <section className="videoDetails">
      <h1 className="videoDetails__title">{selectedVideo.title}</h1>
      <div className="videoDetails__container">
        <div className="videoDetails__info-1">
          <p className="videoDetails__name">By {selectedVideo.channel}</p>
          <p className="videoDetails__date">
            {new Date(selectedVideo.timestamp).toLocaleDateString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </p>
        </div>
        <div className="videoDetails__info-2">
          <p className="videoDetails__likes">{selectedVideo.likes}</p>
          <p className="videoDetails__views">{selectedVideo.views}</p>
        </div>
      </div>
      <p className="videoDetails__description">{selectedVideo.description}</p>
    </section>
  );
}

export default VideoDetails;
