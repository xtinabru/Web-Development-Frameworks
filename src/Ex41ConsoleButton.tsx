import React from 'react'
import classes from './Ex41ConsoleButton.module.css'

export default function Ex41ConsoleButton() {
  
  function thisWillExecuteWhenOnClickHappens() {
    console.log("Hello from ConsoleButton!"); 
  }
  
  return (
    <div 
    onClick={thisWillExecuteWhenOnClickHappens}
    className={ classes.button }>Ex41ConsoleButton
    </div>
  )
}
