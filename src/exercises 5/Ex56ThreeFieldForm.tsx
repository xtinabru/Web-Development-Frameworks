import React, { useState } from 'react'

export default function Ex56ThreeFieldForm() {

  const[firstName, setFirstName] = useState('');
  const[lastName, setLastName] = useState('');
  const[emailAddress, setEmailAddress] = useState('');
  const [dataSaved, setDataSaved] = useState(false);

  function handleFirstNameChange(event){
    setFirstName(event.target.value);
  }
  function handleLastNameChange(event){
    setLastName(event.target.value);
  }
  function handleEmail(event){
    setEmailAddress(event.target.value);
  }

  function savedButtonClicked(){
    setDataSaved(true);
  }

let output = ( <div>
  <div><input type="text" onChange={handleFirstNameChange}/>First name</div>
      <div><input type="text"  onChange={handleLastNameChange}/>Family name</div>
      <div><input type="text" onChange={handleEmail}/>E-mail</div>
      <div><button onClick={ savedButtonClicked }>Save</button></div>
</div>);

if(dataSaved == true){
 output = ( <div >Saved {firstName} {lastName} ({emailAddress})</div>);
}

  return (
    <div>
      { output }
    </div>
  )
}