// import React, { useState } from "react";
// import { ToggleButton } from 'primereact/togglebutton';
// import 'primereact/resources/themes/lara-dark-blue/theme.css'; // לדוגמה, נושא כהה
// import 'primereact/resources/themes/saga-blue/theme.css'; // לדוגמה, נושא בהיר
// import 'primereact/resources/themes/arya-dark/theme.css';
import 'primereact/resources/themes/vela-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css'
import '../../ToggleButtonStyles.css'
import { ToggleButton } from 'primereact/togglebutton';
import React, { useState, useContext } from 'react';
import axios from 'axios';
import TaskContext from './TaskContext';

function CompleteTask() {
    debugger;
    const { task, setTasks } = useContext(TaskContext)
    const [checked, setChecked] = useState(task.comleted);
    const handleChange = async () => {
        const res = await axios.put(`http://localhost:5000/api/tasks/${task._id}`)
        setTasks(res.data);
    }
    return (
        <>
            <div className="card flex justify-content-center">
                <ToggleButton
                    style={checked ? {
                        backgroundColor: '#fc45a6b0 !important',
                        color: 'black',
                    } : {
                        backgroundColor: 'black',
                        color: '#fc45a6b0',
                        borderColor: '#fc45a6b0',

                    }} 
                    onLabel="complete" 
                    offLabel="not complete" 
                    onIcon="pi pi-check" 
                    offIcon="pi pi-times"
                    checked={checked}
                    onChange={(e) => {
                        handleChange();
                        setChecked(e.value)
                    }}
                    // className='w-9rem' 
                    />
            </div>
        </>
    );

}
export default CompleteTask