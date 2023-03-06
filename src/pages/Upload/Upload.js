import { useState } from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import UploadVideo from "../../assets/Images/UploadVideo.jpg";
import "./Upload.scss";

function Upload() {
  return (
    <>
      <Header />
      <section className="form">
        <h1 className="form__title">Upload Video</h1>

        <label className="form__subtitle">Video Thumbnail</label>
        <img src={UploadVideo} className="form__thumbnail" alt="thumbnail"></img>
    
      
      <form id="form__form" className="form__form">
        <label htmlFor="name" className="form__label--title">
          Title your video
        </label>
        <input
          id="name"
          className="form__input--title"
          type="text"
          placeholder="Add a title to your video"
          name="videoTitle"
        />

        <label htmlFor="description" className="form__label--description">
          Add a video description
        </label>
        <textarea
          id="description"
          className="form__input--description"
          placeholder="Add a description to your video"
          rows="5"
          cols="30"
         
          name="videoDescription"
        ></textarea>
      </form>
      <Button className="btn--publish" text="Publish" link="/" />
      <Button className="btn--cancel" text="Cancel" link="/"/>
   </section>
   
    </>
  )
}

export default Upload;
