import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
    const data = useLoaderData()
    
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/r0hitkumarsingh')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

    return(
        <>
        <div className='text-center m-4 bg-gray-600 p-4 text-3xl'>
            Github Followers: {data.followers}
        </div>

            <div className='flex justify-center '>
                <img src={data.avatar_url} alt="Git profile picture" width={200}/>
            </div>
        </>
    )
}



export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/r0hitkumarsingh')
    return response.json()
}