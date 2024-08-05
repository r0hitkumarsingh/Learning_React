import React, {useState} from 'react'

function Counter() {
    const [count, setcount] = useState(0);

    return (
        <>
            <p>You clicked {count} times</p>
            <button onClick={() => setcount(count + 1)}> Click Me </button>
        </>    
    )
}

export default Counter
