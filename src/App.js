import { useState } from "react";

import Header from "./components/Header/Header.js";
import Hero from "./components/Hero/Hero.js";
import CommentsForm from "./components/CommentsForm/CommentsForm.js";
import CommentsList from "./components/CommentsList/CommentsList.js";
import Comments from "./components/Comments/Comments.js";
import Comment from "./components/Comment/Comment.js";
import Button from "./components/Button/Button.js";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer.js";
import Videos from "./components/Videos/Videos.js";
import VideoCard from "./components/VideoCard/VideoCard.js";
// import videoData from "./assets/Data/videos.json";
import videoData from "./assets/Data/video-details.json";
import videosList from "./assets/Data/videos.json";

import "./App.scss";
console.log(videoData);

function App() {
  // const handleClick = () => {
  // }
  // };

  // const handleClickWithValue = (val) => {

  // };

  //const [darkMode, setDarkMode] = useState(false)
  const [videos] = useState(videosList); //array of vids
  const [selectedVideo, setSelectedVideo] = useState(videoData[0]); //single vid


  const handleVideoClick = (id) => {
    const newVideo = videoData.find((video) => video.id === id);
    setSelectedVideo(newVideo);
    //try looking into .find method for arrays
  };
  return (
    <>
      {/* <div className={`app ${darkMode ? 'app--dark-mode' : ''}`}> */}
      <Header />
      <Button text="Upload" />
      <VideoPlayer selectedVideo={selectedVideo}/>
      <Hero />
      <Comments />
      {/* <CommentsForm /> */}
      <Button text="Comment" />
      {/* <CommentsList comments={selectedVideo.comments} /> */}
      {/* <Comment /> */}
      <Videos
        videos={videos}
        selectedVideo={selectedVideo}
        handleVideoClick={handleVideoClick}
      />
      {/* <VideoCard /> */}
      {/* <button onClick={()=> setDarkMode(!darkMode)}>Toggle Dark Mode</button> */}

      <img src={selectedVideo.url} alt={selectedVideo.description} />
      {selectedVideo.id}

      {/* </div> */}

      {/* <Button handleClick={handleClick} content="hello" /> */}
      {/* <SpecialButton handleClick={handleClickWithValue} = (val, e) => {
        e.prevent....
      }
      content="special card"/> */}
    </>
  );
}

export default App;
