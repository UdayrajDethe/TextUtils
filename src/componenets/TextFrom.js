import { useState } from "react"    
import React from 'react'


export default function TextFrom(props) {
    const [text, setText] = useState('');

    // text = "new text"; // wrong way to change the state variable
    // setText("new text"); // correct way to change the state variable

    const handUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

  return (
    <div>
        <div className="mb-3">
            <h1>{props.heading} </h1>
            <textarea className="form-control" placeholder="Enter your text" value={text} onChange={(e) => setText(e.target.value)} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handUpClick}> Convert to UPPERCASE</button>
    </div>
  )
}