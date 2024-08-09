import { useState } from 'react'


function App() {
  const [counter, setCounter] = useState(5)


  const addValue = () => {
    
    (counter === 10) ? alert("Stop, This is 10") : setCounter(counter + 1)
        
  }

  const removeValue = () => {

    (counter === 0) ? alert("Stop, This is 0") : setCounter(counter - 1)

        
  }

  return (
    <>
    <h1>Rohit</h1>
    <h2>Counter Value: {counter}</h2>

    <button
    onClick={addValue}
    >Increase Value</button> <br />

    <button
    onClick={removeValue}
    >Decrease Value</button>
    </>
  )
}

export default App
