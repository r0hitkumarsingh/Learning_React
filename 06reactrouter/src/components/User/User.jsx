import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()

    return (
        <div className='bg-gray-600 p-4 w-1/2 m-auto text-white'>
            <p className='text-center text-lg'>User: {userId}</p>
        </div>
    )
}

export default User
