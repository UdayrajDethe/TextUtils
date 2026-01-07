import { useState } from "react"    
import React from 'react'

export default function TextFrom(props) {
    const [text, setText] = useState('');

    // text = "new text"; // wrong way to change the state variable
    // setText("new text"); // correct way to change the state variable

    // Uppercase function
    const handUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    // Lowercase function
    const handLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    // Remove punctuations
    const handleRemoveClick = () => {
        let puncs = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
        let result = text.replace(puncs, '');
        let newText = result;
        setText(newText)
    }

    // Remove New line
    const handleNewLineRmClick = () => {
        let someText = text.replace(/(\n|\r)/gm, "");
        let newText = someText;
        setText(newText)
    }

    // Remove Numbers
    const handleNumRmClick = () => {
        let num = text.replace(/[0-9]/g, "");
        let newText = num;
        setText(newText)
    }

    // Remove Extra Spaces
    const handleRmSpcaesClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    // Clear Text
    const handleClearClick = () => {
        let newText = '';
        setText(newText)
    }

    //specker function
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        }

        

  return (
    <>
        <div>
            <div className="mb-3">
                <h1>{props.heading} </h1>
                <textarea className="form-control" placeholder="Enter your text"  onChange={(e) => setText(e.target.value)} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handUpClick}> Convert to UPPERCASE</button>
            <button className="btn btn-primary mx-1 " onClick={handLoClick}>Convert to lowwercase</button>
            <button className="btn btn-primary mx-1" onClick={handleRemoveClick}>Remove Punctuations </button>
            <button className="btn btn-primary mx-1" onClick={handleNewLineRmClick}>Remove New Line </button>
            <button className="btn btn-primary mx-1" onClick={handleNumRmClick}>Remove Numbers </button>
            <button className="btn btn-primary mx-1" onClick={handleRmSpcaesClick}>Remove Extra Spaces </button>
            <button className="btn btn-danger mx-1" onClick={handleClearClick}>Clear Text </button>
            <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p> {0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
    </>
  )
}