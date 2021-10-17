import { useEffect, useState } from 'react'

function UserPage(){
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/users`,) // using SWR
        .then(res => res.json())
        .then(res => {
            console.log(res);
            setData(res)
            setIsLoading(false);
        })
        .catch(err => {
            console.log(err);
            setIsLoading(false);
        })
    }, [])

    if(isLoading){
        return <p>Loading...</p>
    }

    return (
        <ul>
            {data.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>
    )
}

export default UserPage;