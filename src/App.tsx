import './App.css'
import Ex34ContactList from './Ex34ContactList';

function App() { 

  const persons = [
   
    {name: "John Rambo",address: "Armsway 1"},

    { name: "Jill Rambo",address: "Armsway 1"},

    {name: "Tim White",address: "Armsway 2"},
  ]

  return (

  <div>
  <Ex34ContactList contacts={ persons }/>
  </div>

  )
}
export default App;
 