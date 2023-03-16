import { Link } from "react-router-dom";
import "./Button.scss";

function Button({ link, className, text }) {
  if (link) {
    return (
      <Link to={link} className={`btn ${className}`}>
        {text}
      </Link>
    );
  }

  return (
    <button type="submit" className={`btn ${className}`}>
      {text}
    </button>
  );
}

export default Button;
