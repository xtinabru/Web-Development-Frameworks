import { useState } from 'react'

export default function Ex52ClickCounter() {

  const [counter, setCounter] = useState(0);

  function clickHandler(){
    setCounter(counter + 1)
  }


  return (
    <div>
      <h1>Click Counter</h1>
      <div>You have clicked the button {counter} times</div>
      <button onClick={clickHandler}>
        Click me
      </button>
    </div>
  )
}
