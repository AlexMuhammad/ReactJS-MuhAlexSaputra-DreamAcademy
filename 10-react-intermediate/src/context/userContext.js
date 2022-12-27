import axios from 'axios';
import React, { createContext, useState } from 'react'

export const UserContext = createContext({})

const UserContextProvider = () => {
    const [data, setData] = useState([]);
    const [user, setUser] = useState(null);

    const getUser = async () => {
        try {
            const response = axios({
                method: "GET",
                url: "http://localhost:3000/users"
            });
        }
        catch (err) {
            throw new Error(err.message)
        }
    }

    const handleUser = (userId) => {
        const user = data.find((user) => user.id === userId);

        setUser(user)
    }
    return (
        <div>userContext</div>
    )
}

export default UserContextProvider;