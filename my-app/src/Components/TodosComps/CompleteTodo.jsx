import { ToggleButton } from 'primereact/togglebutton';
import { useState, useContext } from 'react';
import axios from 'axios';
import TodoContext from './TodoContext';

function CompleteTodo() {
    debugger;
    const { todo, setTodos } = useContext(TodoContext)
    const [checked, setChecked] = useState(todo.comleted);
    const handleChange = async () => {
        const res = await axios.put(`http://localhost:5000/api/todos/${todo._id}`)
        setTodos(res.data);
    }
    return (
        <>
            <div className="card flex justify-content-center">
                <ToggleButton onLabel="complete" offLabel="not complete" onIcon="pi pi-check" offIcon="pi pi-times"
                    checked={checked} onChange={(e) => { handleChange(); setChecked(e.value) }} className="w-9rem" />
            </div>
        </>
    );

}
export default CompleteTodo