import './App.css'

function App() {
  

  return (
    
      <div className='bg-gray-900 w-full h-screen  fixed flex flex-col items-center p-10'>
       
        <h1 className='text-blue-900 text-7xl font-sans  '>Gemini API </h1>
        <input type="text" name="query" id="query" 
        className="m-10 w-3/6 py-5 px-4 outline-none text-blue-200  bg-gray-700 rounded-3xl overflow-hidden"
        placeholder="Enter your query" />
        <input type="button" value="Send" className=" w-1/6 py-3 outline-none text-white text-2xl font-bold cursor-pointer bg-blue-900 rounded-3xl"/>
      
        
      
        
      </div>  
    
  )
}

export default App
