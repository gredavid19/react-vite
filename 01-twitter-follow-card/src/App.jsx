import { useEffect, useState } from "react";
import { TwitterFollowCard } from './TwitterFollowCard'
import './App.css'

export function App() {
    const format = (userName) => `@${userName}`

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then((response) => response.json())
            .then((allUsersObject) => {
                const filteredUsers = allUsersObject.users.slice(24)
                setUsers(filteredUsers)
            });
    }, []);

    return (
        <section className='App'>
            {
                users.map((user) => {
                    const { userName, firstName, lastName, id } = user
                    // console.log(user)
                    return (
                        <TwitterFollowCard 
                            key={id}
                            formatUserName={format} 
                            userName={userName} 
                            name={`${firstName} ${lastName}`}
                            initialIsFollowing={false}/>
                    )
                })
            }
        </section>
    )
}