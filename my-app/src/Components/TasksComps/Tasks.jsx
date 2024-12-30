import { useEffect, useState } from "react";
import axios from 'axios';
import Task from "./Task";
import CreateTask from "./CreateTask"
import * as React from 'react';
// import react from 'react';
import TaskContext from "./TaskContext";

function Tasks() {
    const [tasks, setTasks] = useState([])
    const imp = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/tasks')
            if (res.status === 200) {
                setTasks(res.data.sort((a, b) => a._id - b._id) || [])
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
            <CreateTask setTasks={setTasks}/>
            {tasks.length === 0 ? <h1 style={{textAlign:"center"}}>No tasks found</h1> :
            tasks.map((task) => (        
                <TaskContext.Provider value={{task, setTasks}}>
                <Task/> 
                </TaskContext.Provider>
            ))}
        </>
    )
}

export default Tasks;



