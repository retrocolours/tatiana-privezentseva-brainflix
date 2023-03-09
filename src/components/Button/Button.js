import { Link } from "react-router-dom";
import "./Button.scss";

function Button(props) {
  if (props.link) {
    return (
      <Link to={props.link} className={`btn ${props.className}`}>
        {props.text}
      </Link>
    );
  }

  return (
    <button type="submit" className={`btn ${props.className}`}>
      {props.text}
    </button>
  );
}

export default Button;
