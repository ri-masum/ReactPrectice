import { useEffect, useState } from "react"
import UserDetails from "./UserDetails"

export default function Users(){

    const [users,setUsers]=useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))

    },[])
  


    return <div>

        <h1>Users:{users.length} </h1>
        {
            users.map(user=><UserDetails user={user} ></UserDetails>)
        }

    </div>
}
/**
 * 1.state to hold data
 * 2.use effect with dependency array
 * 3.use  fetch to load data
 * 4.set loaded data to the state
 * 5.display data
 */