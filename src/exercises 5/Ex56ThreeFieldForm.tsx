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

let formVisisbilityStyle = 'block';
let stringVisibilityStyle = 'none';
if(dataSaved == true){
  formVisisbilityStyle = 'none'
  stringVisibilityStyle = 'block'
}

  return (
    <div>

    <div style={{display: formVisisbilityStyle }}>
      <div><input type="text" onChange={handleFirstNameChange}/>First name</div>
      <div><input type="text"  onChange={handleLastNameChange}/>Family name</div>
      <div><input type="text" onChange={handleEmail}/>E-mail</div>
      <div><button onClick={ savedButtonClicked }>Save</button></div>
    </div>

    <div style={{display: stringVisibilityStyle}}>Saved {firstName} {lastName} ({emailAddress})</div>
    </div>
  )
}