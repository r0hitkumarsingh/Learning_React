import { useState } from "react"

function App() {

  let [Counter, setCounter] = useState(0)

  const addValue = () => {
    
    if (Counter +1 > 20) {
      alert("Limit Exceed")
    }else{
      setCounter(Counter + 1)
      console.log(Counter);
    }
    
  }

  const removeValue = () => {
    if (Counter - 1 < 0) {
      alert("Value can't be Negetive")
    }else{
      setCounter(Counter - 1)
      console.log(Counter);
    }
  }

  return (

    <>
    <h1>React Counter</h1>
    <h2>Counter value : {Counter}</h2>

    <button onClick = {addValue}>
      Add Value {Counter}
    </button> 
    
     <br />

    <button onClick={removeValue}>
      Remove value {Counter}
    </button>
    </>

  )
}

export default App
