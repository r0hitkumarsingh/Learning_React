import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'


function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>

      <h1> Context Api</h1>

    </UserContextProvider>
  )
}

export default App
