import classes from './Ex41ConsoleButton.module.css'

export default function Ex45GeneralButton({buttonText, buttonAction}) {

  return (
    <div
    onClick={buttonAction}
    className={ classes.button}
    >{ buttonText }

    </div>
  )
}
