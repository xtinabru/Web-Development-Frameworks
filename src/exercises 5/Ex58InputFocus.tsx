import React, {useRef} from 'react'

export default function Ex58InputFocus() {

  const inputRef = useRef(null);

  function handleButton(){
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleButton}>Click me!</button>
    </div>
  )
}
