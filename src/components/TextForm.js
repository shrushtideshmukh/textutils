import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

  const handleupclick = ()=>{
    //console.log('Clicked on Button ' + text); //not compulsory for our understanding only
    let newtext = text.toUpperCase();
    props.showAlert("Converted to Uppercase", "success ");

    setText(newtext)
  } 


  const handleloclick = () =>{
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lowercase", "success ");
  }  


  const handleclearclick = () =>{
    let newtext = '';
    setText(newtext)
    props.showAlert("Text is Cleared", "success ");
  }


  const handlereverseclick = () =>{
    let newtext="";
    for(let i= text.length - 1; i>=0; i--)
    {
      newtext= newtext + text[i];
    }
    setText(newtext)
    props.showAlert("Text is Reversed", "success ");
  }


  const handleremoveextraspace = () =>{
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(""));
    props.showAlert("Spaces Removed", "success ");
  }

  const handleOnChange = (event) =>{
    // console.log('On Clicked');    //not compulsory for our understanding only
    setText(event.target.value)
  } 

  const [text, setText] = useState("Enter text here");
  // text = "new text"  //wrong way to change the state
  // setText('tadaaaa'); //correct way to change the state

  return (
    <>
      <div className='container' style={{color: props.mode==='dark'? 'white': 'black'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'black': 'white', color: props.mode==='dark'? 'white': 'black'}}id="mybox" rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleupclick}> Convert to uppercase </button>
        <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleloclick}>Convert to lowercase</button>
        <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handlereverseclick}>Reverse Text</button>
        <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleremoveextraspace}>Remove Extra Space</button>
        <button  disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleclearclick}>Clear</button>
        
      </div>

      <div className="container my-2" style={{color: props.mode==='dark'? 'white': 'black'}}>
        <p>{text.split(" ").filter((element)=> { return element.length !== 0}).length} words and {text.length} character</p>
        <p>{0.008 * text.split(" ").length} minute read</p>
        <h2>Preview</h2>
        <p>{text.length>0? text: 'Nothing to preview'}</p>
      </div>
    </>
    
  )
}
