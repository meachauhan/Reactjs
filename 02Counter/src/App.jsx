import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increaseCounter=()=>{
    if((count+1)<=20)
      setCount(count+1)
  }
  const decreaseCounter=()=>{
    if((count-1)>=0)
      setCount(count-1)
  }

  return (
    <>
      <h1>Counter Application</h1>
      <h5>Counter Value : {count}</h5>
      <button onClick={increaseCounter}>Increase Counter</button>
      <button onClick={decreaseCounter}>Decrese Counter</button>
      
    </>
  )
}

export default App
