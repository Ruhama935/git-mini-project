import {Input,FormControl,FormLabel,Modal,ModalDialog,DialogTitle,Stack,Button,DialogContent} from '@mui/joy';
import React, {useState,useContext} from 'react';
import axios from 'axios';
import TodoContext from './TodoContext';

function DeleteTodo() {
    const {todo, setTodos} = useContext(TodoContext)
    const [open, setOpen] = useState(false);

    const handleChange = async()=>{
 
        console.log(todo._id)
        try{const res = await axios.delete(`http://localhost:5000/api/todos/${todo._id}`);
        setTodos(res.data);
        } catch(e){console.log(e);return;}
        console.log(todo);
    }
    return (
        <>
            <Button
                variant="outlined"
                color="neutral"
                onClick={() => setOpen(true)}
            >
                <i className="pi pi-trash" style={{ fontSize: '1rem', color: 'red' }}></i>
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog>
                    <DialogTitle>Are you sure you want to delete the todo?</DialogTitle>
                    <Button onClick={(e)=>{
                        setOpen(false)
                        handleChange()}}>yes</Button>
                    <Button variant="outlined" onClick={()=>setOpen(false)}>no</Button>
                </ModalDialog>
            </Modal>
        </>
    )
}

export default DeleteTodo;