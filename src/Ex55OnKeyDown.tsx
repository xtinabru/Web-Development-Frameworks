import React from 'react'
import { useState } from 'react'

export default function Ex55OnKeyDown() {

  const [message, setMessage] = useState('');

  function handleKeyPressed(event){
    if(event.key === 'Enter'){
      setMessage('Now you can see the text after pressing the key')
    }
  }
  return (
    <div 
    
    tabIndex="0" 
    onKeyDown={handleKeyPressed}
    >Here there is a text before pressing the key {message}</div>
  )
}
