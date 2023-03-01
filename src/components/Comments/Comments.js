import "./Comments.scss";
import mohan from "../../assets/Images/Mohan.jpg";

function Comments () {
  return (
    <section className="comments">
        <h2>3 comments</h2>
      <h2 className="form__title">Join The Conversation</h2>
      <div className="form__box">
        <div className="form__avatar">
          <img className="form__image" src={mohan} alt="avatar" />
        </div>
      </div>
      <textarea
        id="comment"
        className="form__text"
        placeholder="Add a new comment"
        rows="5"
        cols="30"
        name="yourComment"
      ></textarea>
      <button className="form__btn" type="submit">
        Comment
      </button>
    </section>
  );
}

export default Comments;
