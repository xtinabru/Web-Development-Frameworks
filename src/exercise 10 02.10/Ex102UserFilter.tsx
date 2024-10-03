import React from 'react'
import { useState } from 'react'

export default function Ex102UserFilter({onFilter}) {

  const[filterText, setFilterText] = useState('')

  function handleButtonClick() {
    onFilter(filterText);
    setFilterText('');
  }

  return (
    <div>
      <input 
      type='text'
      value={filterText}
      onChange={(e)=> setFilterText(e.target.value)} />

      <button onClick={handleButtonClick}>Click me</button>
    </div>
  )
}
