import { useState } from 'react'
import { Input,  } from './components'
import useCurrencyinfo from './hooks/useCurrencyinfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertesAmount, setconvertesAmount] = useState(0)

  const currencyInfo = useCurrencyinfo(from)
  return (
    <>
     <h1 className='text-center text-3xl bg-orange-300'>
      Hello React
      </h1>

    <Input />
    
    </>
  )
}

export default App
