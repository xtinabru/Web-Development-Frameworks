import React from 'react'
import { useState } from 'react'

export default function Ex54HiddenText() {

  const [displayValue, setDisplayValue] = useState('none')

  function makeItVisible(){
    if(displayValue == 'none'){
      setDisplayValue('block')
    }else{
      setDisplayValue('none')
    }
  }

  return (
    <div>
      <h1>Here we can see the real magic!</h1>
      <button onClick={makeItVisible}>Press me!</button>
      <p style={{display: displayValue}}> Now you have become a witness of a real magic!</p>
    </div>
  )
}
