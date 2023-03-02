//import {useState} from 'react';
import "./Button.scss"


function Button(props) {
  return (
    <button type="submit" className="btn">{props.text}</button>
  )
}

// function Button (props) {
//     return 
//(
//         <div className="button onClick={props.handleClick}">{props.content}</div>
//     )
// }

 export default Button;
