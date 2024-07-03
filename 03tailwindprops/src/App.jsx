import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-orange-300 text-white p-4 rounded-xl mb-4' >TailWind test</h1>

      <Card />
      <Card />
    </>
  )
}

export default App
