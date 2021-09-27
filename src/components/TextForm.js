import React , {useState} from 'react'


export default function TextForm(props) {
    const [text,setText] = useState('Enter Text Here')
    const clickHandler = ()=>{
        // console.log("Upper casse was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to upper case','success')
    }
    const lowclickHandler = ()=>{
        // console.log("Upper casse was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Converted to lower case','success')
    }
    
    const handlechange = (event)=>{
        // console.log("on handle")
        setText(event.target.value)
    }
    
    return (
        <>
        <div className="container" style={{color : props.mode==='dark'?'white':'black'}}>
            <h1>Text Analyzer</h1>
        <div>
            <div className="mb-3">
                <textarea style={{backgroundColor : props.mode==='dark'?'#05386a':'white' , color : props.mode==='dark'?'white':'black' }} className="form-control" onChange={handlechange}  value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={clickHandler}>Convert To UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={lowclickHandler}>Convert To LowerCase</button>
            

        </div>
        </div>
        <div className="container  my-3" style={{color : props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary here</h1>
            <p>{text.split(" ").length} words and {text.length} character</p>
            <p>{0.008 * text.split(" ").length} minutes to read the text</p>
            <h2>Preview text</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
