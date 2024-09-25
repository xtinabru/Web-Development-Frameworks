import React from 'react'
import { useState } from 'react'

export default function Ex93TextArea() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [feedback, setFeedback] = useState<string>('')

  return (
    <div>
    <h1>Exercise 93. Text Area</h1>
    <form>
      <div>
        <input type="text" onChange={(name) => setName(name.target.value)}
        value={name}  placeholder='User Name' />
      </div>
      <div>
        <input type="email" onChange={(email) => setEmail(email.target.value)} 
         value={email} placeholder='Email' />
      </div>
      <div>
       <textarea name="feedback" onChange={(feedback) =>    
        setFeedback(feedback.target.value)}
       value={feedback} id="" placeholder='Feedback message'/>
      </div>
      <div>
        <button>Submit</button>
      </div>
      <div>
      <p>Character count: {feedback.length}</p> 
      </div>
    </form>
  </div>
  )
}
