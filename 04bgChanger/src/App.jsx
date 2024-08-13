
import { useState } from 'react'
import './App.css'

function App() {

  const [color,setColor] = useState("blue")

  return (
   
    <div className='w-full h-screen' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center inset-x-0  top-12 px-2 '>
        <div className='fixed flex flex-wrap justify-center bg-white p-2 rounded-3xl'> 
          <button onClick={()=>setColor("red")} className='p-2 font-bold rounded-2xl m-1' style={{backgroundColor:"red"}}> Red </button>
          <button onClick={()=>setColor("green")}className='p-2 font-bold rounded-2xl m-1' style={{backgroundColor:"green"}}> Green </button>
          <button onClick={()=>setColor("grey")}className='p-2 font-bold rounded-2xl m-1' style={{backgroundColor:"grey"}}> Grey </button>
        </div>
      </div>
    </div>
   
  )
}

export default App
