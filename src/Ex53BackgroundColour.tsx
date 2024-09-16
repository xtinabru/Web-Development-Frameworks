import React from 'react'
import { useState } from 'react'


export default function Ex53BackgroundColour() {

  const [bgColour, setBgColour] = useState('transparent')

  function handleMouseEnter(){
    setBgColour('violet');
  }

  function handleMouseLeave(){
    setBgColour('transparent');
  }


  return (
    <div style={{ backgroundColor: bgColour }}
     onMouseEnter={handleMouseEnter} 
     onMouseLeave={handleMouseLeave}
     >This is a new exercise 5.3</div>
  )
}
