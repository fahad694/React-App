import React from 'react'
import { useState } from 'react'

export default function Form(props) {
  // this one is hook
  const [text, setText] = useState('')

    // textarea text
  const changeTextValue = (e) => {
    let newText = e.target.value
    setText(newText) 
  }
  const handleUpCaseText = () => {
    let newText = text.toUpperCase()
    setText(newText)
  }

  const showWordsCount = () => {
    if (text === ''){
      return 0
    } else {
      return text.split(' ').length
    }
  }
  return (
    <div className={`text-${props.mode === 'dark' ? 'white' : 'dark'}`}>
      <div className='container'>
        <div className={`mb-3`}>
          <label for="exampleFormControlInput1" className="form-label">{props.label}</label>
          <textarea className={`form-control text-${props.mode === 'dark' ? 'white' : 'dark'}`} style={{ background: props.mode === 'dark' ? 'grey' : 'white' }} value={text} onChange={changeTextValue} id="exampleFormControlInput1"/>
        </div>
        <button className='btn btn-primary' onClick={handleUpCaseText}>Convert to Upercase</button>
      </div>
      <div className='container'>
        <h2>Your text summary</h2>
        <p>{showWordsCount()} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  )
}

// default label used to handle undefined props
Form.defaultProps = {
  label: 'default label'
}