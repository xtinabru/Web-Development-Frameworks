import React, {useRef} from "react"

export default function Ex57UseRefHook() {

  const inputRef = useRef(null);
  
  function handleClick(){
    console.log(inputRef.current.value);
  }

  return (
    <div>
      <input ref={inputRef}  type="text" />
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}
