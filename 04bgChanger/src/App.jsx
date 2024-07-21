import { useState } from 'react'


function App() {
  const [color, setColor] = useState("lavender")

  return (
    <div className="w-full h-screen duration-300"
      style={{backgroundColor: color}}>

    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white
      px-3 py-2 rounded-3xl">
        
        <button
        onClick={() => setColor("red") }
        className="outline-none px-4 py-1 rounded-full text-white shadow-2xl" style={{backgroundColor: "red"}} > Red </button>

        <button 
        onClick={() => setColor("green") }
        className="outline-none px-4 py-1 rounded-full text-white shadow-2xl" style={{backgroundColor: "green"}}> Green</button>

        <button 
        onClick={() => setColor("blue") } 
        className="outline-none px-4 py-1 rounded-full text-white shadow-2xl" style={{backgroundColor: "blue"}}> Blue </button>

        <button
        onClick={() => setColor("orange") }
        className="outline-none px-4 py-1 rounded-full text-white shadow-2xl" style={{backgroundColor: "orange"}}> Orange </button>

        <button 
        onClick={() => setColor("olive") }
        className="outline-none px-4 py-1 rounded-full text-white shadow-2xl" style={{backgroundColor: "olive"}}> Olive </button>
        
        <button 
        onClick={() => setColor("gray") }
        className="outline-none px-4 py-1 rounded-full text-white shadow-2xl" style={{backgroundColor: "gray"}}> Gray </button>

        <button 
        onClick={() => setColor("yellow") }
        className="outline-none px-4 py-1 rounded-full text-black shadow-2xl" style={{backgroundColor: "yellow"}}> Yellow </button>

        <button 
        onClick={() => setColor("black") }
        className="outline-none px-4 py-1 rounded-full text-white shadow-2xl" style={{backgroundColor: "black"}}> Black </button>
        <button 
        onClick={() => setColor("white") }
        className="outline-1 px-4 py-1 rounded-full text-black shadow-2xl" style={{backgroundColor: "white"}}> white </button>
        
       

        </div>

      </div>
    </div>
  )
}

export default App
