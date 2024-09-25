import React, { useRef, useState } from 'react';

export default function Ex94XCheckboxes() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const [submittedData, setSubmittedData] = useState(null);

  function handleSubmit(event) {
    event.preventDefault(); 

    // Сurrent field value
    const name = nameRef.current.value;
    const email = emailRef.current.value;

    // chosen hobbies
    const selectedHobbies = [];
    if (event.target.sports.checked) selectedHobbies.push('Sports');
    if (event.target.reading.checked) selectedHobbies.push('Reading');
    if (event.target.painting.checked) selectedHobbies.push('Painting');

    // state for data
    setSubmittedData({ name, email, hobbies: selectedHobbies });
  }

  return (
    <div>
      <h2>Ex94XCheckboxes</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={nameRef} placeholder="Name" />
        </div>
        <div>
          <input type="email" ref={emailRef} placeholder="Email" />
        </div>
        <div>
          <label>Hobbies:</label>
          <br />
          <input type="checkbox" name="sports" /> Sports
          <br />
          <input type="checkbox" name="reading" /> Reading
          <br />
          <input type="checkbox" name="painting" /> Painting
          <br />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* Shown ONLY if the form is sent */}
      {submittedData && (
        <div>
          <h3>Submitted Information:</h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Hobbies: {submittedData.hobbies.join(', ')}</p>
        </div>
      )}
    </div>
  );
}
