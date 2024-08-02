import React, {useState} from 'react'

function HookOne() {
    const [count, setCount]= useState(0)

    return (
        <div className='text-center border-neutral-950 bg-gray-400 w-60 h-80 m-auto '>

        <p>Count is : {count}</p>
        <h2>Number is: {count % 2 === 0 ? "Even" : "Odd"}</h2>
        <button onClick={() => {setCount(count + 1)}} >Increment</button>
        <button onClick={() => {setCount(count - 1)}} >Decrement</button>

        </div>
    )
}

export default HookOne
