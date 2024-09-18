import React, {useState} from 'react'
import Ex510ChildComponent from './Ex510ChildComponent'

export default function Ex510ParentComponent() {

  const[counter, setCounter] = useState(0);

  function incrementCounter(){
    setCounter(counter + 1)
  }


  return (
    <div>
      <h2>You have clicked {counter} times</h2>
      <Ex510ChildComponent incrementCounter={incrementCounter}/>
    </div>
  )
}
