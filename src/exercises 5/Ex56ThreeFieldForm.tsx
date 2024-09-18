import React, { useState } from 'react'
import Form from './Ex56components/Form';
import SaveSuccess from './Ex56components/SaveSuccess';

export default function Ex56ThreeFieldForm() {

const [dataSaved, setDataSaved] = useState(false);

function savedButtonClicked(){
  setDataSaved(true);
}

let output = <Form saveButtonClicked={savedButtonClicked}/>;

if(dataSaved == true){
 output = <SaveSuccess firstName="A" lastName="B" emailAddress="C"/>;
}

  return (
    <div>
      { output }
    </div>
  )
}