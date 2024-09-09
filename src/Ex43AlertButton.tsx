import classes from './Ex41ConsoleButton.module.css'

export default function Ex43AlertButton({alertText}) {
  
  function thisWillExecuteWhenOnClickHappens() {
    alert(alertText); 
  }
  
  return (
    <div 
    onClick={thisWillExecuteWhenOnClickHappens}
    className={ classes.button }>Ex43AlertButton
    </div>
  )
}
