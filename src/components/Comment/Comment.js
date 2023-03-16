const Comment = ({ commentAuthor, commentDate, commentComment }) => {
  return (
    <li className="comments__item">
      <div className="comments__picture"></div>
      <div className="comments__info">
        <div className="comments__main">
          <p className="comments__author"> {commentAuthor}</p>
          <p className="comments__timestamp">
            {new Date(commentDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </p>
        </div>
        <p className="comments__opinion">{commentComment}</p>
      </div>
    </li>
  );
};

export default Comment;
