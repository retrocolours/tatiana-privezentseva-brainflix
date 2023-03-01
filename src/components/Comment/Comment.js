const Comment = (props) => {
    return (
      <li>
        <p> {props.commentAuthor}</p>
        <p>{props.commentComment}</p>
        <p>{props.commentDate}</p>
        <p>{props.commentLike}</p>
      </li>
    );
  };
  
  export default Comment;