import { useEffect, useState } from "react"

function useFetchUsers() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:4000/users`)
            .then(resp => resp.json())
            .then(setUsers)  
        }, 1000)
    },[])
    return users
}

export default useFetchUsers