import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import UploadVideo from "../../assets/Images/UploadVideo.jpg";
import "./Upload.scss";

function Upload() {
  const navigate = useNavigate();
  const [videoTitle, setTitle] = useState("");
  const [videoDescription, setDescription] = useState("");

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(videoDescription, videoTitle);
    console.log(event.target.videoDescription.value);
    if (videoTitle === "" || videoDescription === "") {
      alert("Please fill in all fields");
    } else {
      alert("Thank you for uploading!");
      navigate("/");
    }
  };

  return (
    <>
      <section className="form">
        <h1 className="form__title">Upload Video</h1>
        <div className="form__container">
          <form
            onSubmit={(event) => handleSubmit(event)}
            id="form__form"
            className="form__form"
          >
            <div className="form__info">
              <div className="form__box">
                <label className="form__subtitle">Video Thumbnail</label>
                <img
                  src={UploadVideo}
                  className="form__thumbnail"
                  alt="thumbnail"
                ></img>
              </div>
              <div className="form__wrapper">
                <label htmlFor="name" className="form__label--title">
                  Title your video{" "}
                </label>
                <input
                  id="name"
                  className="form__input--title"
                  type="text"
                  placeholder="Add a title to your video"
                  name="videoTitle"
                  onChange={handleChangeTitle}
                  value={videoTitle}
                />

                <label
                  htmlFor="description"
                  className="form__label--description"
                >
                  Add a video description{" "}
                </label>
                <textarea
                  id="description"
                  className="form__input--description"
                  placeholder="Add a description to your video"
                  rows="5"
                  cols="30"
                  name="videoDescription"
                  onChange={handleChangeDescription}
                  value={videoDescription}
                ></textarea>
              </div>
            </div>
            <div className="form__buttons">
              <Button className="btn--cancel" text="Cancel" link="/" />
              <Button type="button" className="btn--publish" text="Publish" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
export default Upload;
