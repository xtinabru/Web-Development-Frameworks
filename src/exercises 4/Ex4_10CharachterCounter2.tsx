import React from 'react';

export default function Ex4_10CharachterCounter2({ outputType, minLength }) {

  function whenYouChange(event) {
    const inputText = event.target.value;

    if (inputText.length >= minLength) {
      if (outputType === 'alert') {
        alert("Number of characters: " + inputText.length);
      } else if (outputType === 'console') {
        console.log("Number of characters: " + inputText.length);
      }
    }
  }

  return (
    <div>
      <input 
        onChange={whenYouChange} 
        type="text"
        placeholder="Write some words"
      /> 
    </div>
  );
}
