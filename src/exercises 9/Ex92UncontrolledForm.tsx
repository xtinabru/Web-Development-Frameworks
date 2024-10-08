import React from 'react'
import { useRef } from 'react'

/* Develop an uncontrolled form that gathers user contact information, including first name, last name, phone number, and address. Display the entered information when the user clicks a "Submit" button */

export default function Ex92UncontrolledForm() {

  const firstNameRef = useRef<HTMLInputElement>(null);

  // function formSubmitHandler(event){
  //   event.preventDefault();
  //   console.log('Form submitted')

  //   //read the form data from the form fields
  //   const formData = new FormData(event.target)

  //   //print the form values to console one by one

  //   console.log('First Name:', formData.get('firstName'));
  //   console.log('Last Name:', formData.get('lastName'));
  //   console.log('Email:', formData.get('email'));
  //   console.log('Password:', formData.get('pwd'));

  function formSubmitWithRefExample(event){
    event.preventDefault();
    console.log('First name:', firstNameRef.current.value)
    
  }

  return (
    <div>
      <h1>Exercise 92. Uncontrolled form</h1>
      <form onSubmit={formSubmitWithRefExample}>
        <div>
          <input type="text" ref={firstNameRef} name='firstName' placeholder='First Name' />
        </div>
        <div>
          <input type="text" name='lastName' placeholder='Last Name' />
        </div>
        <div>
          <input type="email" name='email' placeholder='Email' />
        </div>
        <div>
          <input type="password" name='pwd' placeholder='Password' />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  )
}
