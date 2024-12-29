import { useEffect, useState } from "react";
import axios from 'axios';
import Todo from "./Todo";
import CreateTodo from "./CreateTodo"
import * as React from 'react';
// import react from 'react';
import TodoContext from "./TodoContext";

function Todos() {
    const [todos, setTodos] = useState([])
    const imp = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/todos')
            if (res.status === 200) {
                setTodos(res.data.sort((a, b) => a._id - b._id))
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
            <CreateTodo setTodos={setTodos}/>
            {todos.map((todo) => (        
                <TodoContext.Provider value={{todo, setTodos}}>
                <Todo/> 
                </TodoContext.Provider>
            ))}
        </>
    )
}

export default Todos;



