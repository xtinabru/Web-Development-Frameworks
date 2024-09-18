import React, {useState} from 'react';
import './App.css'
import Ex59ColorBox from './exercises 5/Ex59ColorBox';


function App() { 

  const [color, setColor] = useState('');

  function handleInputChange(event){
    setColor(event.target.value)
  }

  return (

  <div>
  <input placeholder="Enter a color" type="text" onChange={handleInputChange}></input>
  <Ex59ColorBox color={color}/>
  </div>
  )
}
export default App;
 