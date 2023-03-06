import "./Button.scss";

function Button(props) {
  return (
    <button type="submit" className={`btn ${props.className}`}>
      {props.text}
    </button>
  );
}

export default Button;
