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
import "./App.scss";

function App() {
  // const handleClick = () +> {
  // }
  // };

  // const handleClickWithValue = (val) => {

  // };
  return (
    <>
      <Header />
      <Button />
      <Hero />
      <CommentsForm />
      <Comments />
      <Comment />
      <CommentsList />
      <VideoPlayer />
      <Videos />
      <VideoCard />

      {/* <Button handleClick={handleClick} content="hello" /> */}
      {/* <SpecialButton handleClick={handleClickWithValue} = (val, e) => {
        e.prevent....
      }
      content="special card"/> */}
    </>
  );
}

export default App;
