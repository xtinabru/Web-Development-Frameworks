import React from 'react';

export default function Ex48StringAlertThroughProprs({wordToCheck}) {

  function textWritten(event) {
    const inputText = event.target.value.toLowerCase(); 

    if (inputText.includes(wordToCheck.toLowerCase())) {
      alert(`You wrote the word '${wordToCheck}'!`);
    } else {
      console.log("Current text:", inputText); 
    }
  }

  return (
    <div>
      <input 
        type="text" 
        onChange={textWritten} 
        placeholder="Write your text" 
      />
    </div>
  );
}