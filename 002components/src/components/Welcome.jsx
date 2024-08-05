import React from 'react'

function Welcome(props) {
    
    const name = () => {
        return <h2>Hello, {props.name}</h2>
    } ;

    return (
        
        name()
     
    )
}

export default Welcome
