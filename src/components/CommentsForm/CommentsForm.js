import mohan from "../../assets/Images/Mohan.jpg";
import "./CommentsForm.scss"

function CommentsForm() {
  return (
    <section className="comments">
        <h2>3 comments</h2>
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
      <button className="comments__btn" type="submit">
        Comment
      </button>
    </section>
  )
}

export default CommentsForm