import React from 'react'

export default function Ex49CharachterCounter() {

  function whenYouClick(event){
  const inputText = event.target.value;
  if (inputText.length > 0){
    alert("Number of charachters: " + inputText.length)
  }
  }

  return (
    <div>
      <input 
      onClick={whenYouClick}
      type="text" /> Write some words
    </div>
  )
}
