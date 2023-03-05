import "./CommentsList.scss";
import Comment from "../Comment/Comment.js";

const CommentsList = (props) => {
  console.log(props.comments);
  return (
    <ul id="comments__list" className="comments__list">
      {props.comments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            commentComment={comment.comment}
            commentAuthor={comment.name}
            commentDate={comment.timestamp}
          />
        );
      })}
    </ul>
  );
};

export default CommentsList;
