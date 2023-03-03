import "./CommentsList.scss";
import Comment from "../Comment/Comment.js";

const CommentsList = (props) => {
  //console.log(props.comments);
  console.log(props.comments);
  return (
    <section className="comments">
      <ul id="comments__list" className="comments__list">
   
        {props.comments.map((comment) => {
          
          return (
            <Comment
              key={comment.id}
              commentAuthor={comment.name}
              commentComment={comment.comment}
              commentDate={comment.timestamp}
          
            />
          );
        })}
      </ul>
    </section>
  );
};

export default CommentsList;
