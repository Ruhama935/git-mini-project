import {Input,FormControl,FormLabel,Modal,ModalDialog,DialogTitle,Stack,Button,DialogContent} from '@mui/joy';
import React, {useState,useContext} from 'react';
import axios from 'axios';
import TaskContext from './TaskContext';

function DeleteTask() {
    const {task, setTasks} = useContext(TaskContext)
    const [open, setOpen] = useState(false);

    const handleChange = async()=>{
 
        console.log(task._id)
        try{const res = await axios.delete(`http://localhost:5000/api/tasks/${task._id}`);
        setTasks(res.data);
        } catch(e){console.log(e);return;}
        console.log(task);
    }
    return (
        <>
            <Button
                variant="outlined"
                color="neutral"
                onClick={() => setOpen(true)}
            >
                <i className="pi pi-trash" style={{ fontSize: '1rem', color: '#fc45a6b0' }}></i>
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog>
                    <DialogTitle>Are you sure you want to delete the task?</DialogTitle>
                    <Button onClick={(e)=>{
                        setOpen(false)
                        handleChange()}}>yes</Button>
                    <Button variant="outlined" onClick={()=>setOpen(false)}>no</Button>
                </ModalDialog>
            </Modal>
        </>
    )
}

export default DeleteTask;