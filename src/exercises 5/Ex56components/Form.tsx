import { useState} from 'react'

export default function Form({savedButtonClicked}) {

  const[firstName, setFirstName] = useState('');
  const[lastName, setLastName] = useState('');
  const[emailAddress, setEmailAddress] = useState('');

  function handleFirstNameChange(event){
    setFirstName(event.target.value);
  }
  function handleLastNameChange(event){
    setLastName(event.target.value);
  }
  function handleEmail(event){
    setEmailAddress(event.target.value);
  }

  function handleSaveButtonClick(){
    savedButtonClicked();
  }

  return (
    <div>

    <div><input type="text" onChange={handleFirstNameChange}/>First name</div>
    <div><input type="text"  onChange={handleLastNameChange}/>Family name</div>
    <div><input type="text" onChange={handleEmail}/>E-mail</div>
    <div><button onClick={ savedButtonClicked }>Save</button></div>

    </div>
  )
}
