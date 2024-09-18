import React, { useState } from 'react'
import Form from './Ex56components/Form';
import SaveSuccess from './Ex56components/SaveSuccess';

export default function Ex56ThreeFieldForm() {

const [dataSaved, setDataSaved] = useState(false);
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


function savedButtonClicked(firstName, lastName, emailAddress){
  setDataSaved(true);
  setFirstName(firstName);
  setLastName(lastName);
  setEmailAddress(emailAddress);
}

let output = <Form saveButtonClicked={savedButtonClicked}/>;

if(dataSaved == true){
 output = <SaveSuccess firstName={"A"} lastName={"B"} emailAddress={"C"}/>;
}

  return (
    <div>
      { output }
    </div>
  )
}