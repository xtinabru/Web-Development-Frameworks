import React, {useState} from 'react';
import './App.css'
import Ex5ButtonComponent from './typescript exercises 16.09/Ex5ButtonComponent';

function App() { 

  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(count + 1)
  }
  return (

  <div>
    <h2>You clicked {count} times!</h2>
   <Ex5ButtonComponent label="Click me" onClick={handleClick}/>
  </div>
  )
}
export default App;
 