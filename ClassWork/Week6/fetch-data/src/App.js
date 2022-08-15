import logo from './logo.svg';
import React, {useState, useEffect} from 'react'
import './App.css';

function App() 
{
  const[toggle, setToggle] = useState(false)

  useEffect(function(){
    console.log('component created')
  })

  return(
    <div>
      <h1>Fetch API</h1>
      <button onClick={() => setToggle(!toggle)}>toggle</button>
    </div>
  )


}

export default App;
