import './App.css'
import Ex4_10CharachterCounter2 from './exercises 4/Ex4_10CharachterCounter2';

function App() { 

  return (

  <div>
   <Ex4_10CharachterCounter2 outputType="alert" minLength={2} />
   <Ex4_10CharachterCounter2 outputType="console" minLength={3} />
  </div>
  )
}
export default App;
 