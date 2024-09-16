import React from 'react';

export default function Ex47StringAlerter() {

  // given word
  const hardcodedWord = "horse";

  function textWritten(event) {
    const inputText = event.target.value.toLowerCase(); 
    if (inputText.includes(hardcodedWord)) {
      alert(`You wrote the word '${hardcodedWord}'!`);
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
