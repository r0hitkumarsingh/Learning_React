import React, {useState, useEffect} from 'react'

function DataFeatcher() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
            setData(data);
            setLoading(false);
        });
    }, []);

    if (loading) return <p>Loading...</p>


    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
        </div>
    );
}

export default DataFeatcher
