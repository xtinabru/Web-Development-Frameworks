
import classes from './Ex41ConsoleButton.module.css'

export default function Ex42ConsoleButton({ consoleText }) {
  
  function thisWillExecuteWhenOnClickHappens() {
    console.log(consoleText); 
  }
  
  return (
    <div 
    onClick={thisWillExecuteWhenOnClickHappens}
    className={ classes.button }>Ex42ConsoleButton
    </div>
  )
}
