
import { useRef,useState,useCallback,useEffect } from 'react'
import './App.css'

function App() {

  const [length,setLength] = useState(10);
  const[password,setPassword] = useState("")
  const[numberAllowed,setNumberAllowed] = useState(true);
  const[specialCharacterAllowed,setSpecialCharacterAllowed] = useState(true)
  const passRef=useRef(null)
  function generatePassword(){
    let pass=""
    let text="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numberAllowed) text+="0123456789"  
    if(specialCharacterAllowed) text+="%^&()+="
    for(let i=1 ; i<length ; i++ ){
      pass+=text.charAt(Math.floor(Math.random()*text.length+1))

    }
    
    setPassword(pass)
  }
  // generatePassword()
  const generate=useCallback(()=>{generatePassword()},[length,numberAllowed,specialCharacterAllowed,setPassword])
  const copyPassword=useCallback(()=>{
    console.log(password);
    passRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password,generate,setPassword,length])
  useEffect(()=>{generatePassword()},[length,numberAllowed,specialCharacterAllowed])

  return (
    <div className='bg-gray-900 w-full h-screen font-semibold text-white fixed flex flex-wrap justify-center '>
      <div className='fixed flex flex-col justify-center  bg-purple-950 p-9 rounded-xl top-40'>
        <div className='flex justify-center mb-5 font-bold text-2xl'>Password Generator </div>
      <div className='flex shadow-sm'>
     
       <input type="text" ref={passRef} name="passwordtext" className='text-orange-600 px-3 py-2  w-full overflow-hidden' value={password} readOnly placeholder='Generated Password'/>
       <button className='outline-none bg-blue-500 px-3 ' onClick={copyPassword}> Copy</button>

      </div>
      <br />
      <div>
        <input type="range" name="length" id="length" min={5} max={100} onChange={(e)=>{setLength(e.target.value)}}/>
        <label htmlFor="length"> length({length}) </label>
        <input type="checkbox" name="number" id="number" onChange={(e)=>setNumberAllowed(!numberAllowed)} checked={numberAllowed} value={numberAllowed}/>
        <label htmlFor="number"> Number </label>
        <input type="checkbox" name="specialCharacters" id="specialCharacters"  onChange={(e)=>setSpecialCharacterAllowed(!specialCharacterAllowed)} checked={specialCharacterAllowed} value={specialCharacterAllowed}/>
        <label htmlFor="specialCharacter"> Special Character</label>

      </div>
      </div>
    </div>
  )
}

export default App
