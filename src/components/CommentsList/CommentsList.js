import Comment from "../Comment/Comment.js";

const CommentsList = ({ comments }) => {
  return (
    <ul id="comments__list" className="comments__list">
      {comments.map((comment) => {
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
