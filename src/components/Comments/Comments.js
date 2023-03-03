import "./Comments.scss";
import mohan from "../../assets/Images/Mohan.jpg";
import CommentsList from "../CommentsList/CommentsList";
// import CommentsList from "../CommentsList/CommentsList";

function Comments({ selectedVideoComments }) {
  return (
    <section className="comments">
      <h2>{selectedVideoComments.length} comments</h2>
      <h2 className="comments__title">Join The Conversation</h2>
      <div className="comments__box">
        <div className="comments__avatar">
          <img className="comments__image" src={mohan} alt="avatar" />
        </div>
      </div>
      <textarea
        id="comment"
        className="comments__text"
        placeholder="Add a new comment"
        rows="5"
        cols="30"
        name="yourComment"
      ></textarea>

      <CommentsList comments={selectedVideoComments} />
    </section>
  );
}

export default Comments;
