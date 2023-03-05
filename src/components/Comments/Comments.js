import "./Comments.scss";
import Button from "../Button/Button.js";
import mohan from "../../assets/Images/Mohan.jpg";
import CommentsList from "../CommentsList/CommentsList";
// import CommentsList from "../CommentsList/CommentsList";

function Comments({ selectedVideoComments }) {
  return (
    <section className="comments">
      <p className="comments__number">
        {selectedVideoComments.length} Comments
      </p>

      <div className="comments__box">
        <img className="comments__image" src={mohan} alt="avatar" />

        <div className="comments__form">
          <label htmlFor="comment" className="comments__label">
            Join the Conversation
          </label>
          <textarea
            id="comment"
            className="comments__text"
            placeholder="Add a new comment"
            rows="5"
            cols="32"
            name="yourComment"
          ></textarea>

          <Button className="btn--comment" text="Comment" />
        </div>
      </div>
      <CommentsList comments={selectedVideoComments} />
    </section>
  );
}

export default Comments;
