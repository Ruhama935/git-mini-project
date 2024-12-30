import { useEffect, useState } from "react";
import axios from 'axios';
import User from "./User";
import CreateUser from "./CreateUser"
import * as React from 'react';
// import react from 'react';
import UserContext from "./UserContext";

function Users() {
    const [users, setUsers] = useState([])
    const imp = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/users')
            if (res.status === 200) {
                setUsers(res.data.sort((a, b) => a._id - b._id) || [])
            }
        }
        catch (e) {
            console.log(e);

        }
    }
    useEffect(() => {
        imp();
    }, [])

    return (
        <>
            <CreateUser setUsers={setUsers}/>
            {users.length === 0 ? <h1 style={{ textAlign: "center"}}>No users found</h1> :
            users.map((user) => (
                <UserContext.Provider value={{ user, setUsers }}>
                    <User/> 
                </UserContext.Provider>
            ))}
        </>
    )
}

export default Users;



