import React from 'react'

export default function Ex46TextInput() {

  function textChanged(event){
    console.log(event.target.value)
  }

  return (
    <div>
      <input type="text" onChange={ textChanged }/> Write something and see console for output
    </div>
  )
}
