import {Input,FormControl,FormLabel,Modal,ModalDialog,DialogTitle,Stack,Button,DialogContent} from '@mui/joy';
import React, {useState,useContext} from 'react';
import axios from 'axios';
import UserContext from './UserContext';

function DeleteUser() {
    debugger
    const {user, setUsers} = useContext(UserContext)
    const [open, setOpen] = useState(false);

    const handleChange = async()=>{
        try{const res = await axios.delete(`http://localhost:5000/api/users/${user._id}`);
        setUsers(res.data);
        } catch(e){console.log(e);return;}
        console.log(user);
    }
    return (
        <>
            <Button
                variant="outlined"
                color="neutral"
                onClick={() => setOpen(true)}
            >
                <i className="pi pi-trash" style={{ fontSize: '1rem', color: '#f83b93b0' }}></i>
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog>
                    <DialogTitle>Are you sure you want to delete the user?</DialogTitle>
                    <Button onClick={(e)=>{
                        setOpen(false)
                        handleChange()}}>yes</Button>
                    <Button variant="outlined" onClick={()=>setOpen(false)}>no</Button>
                </ModalDialog>
            </Modal>
        </>
    )
}

export default DeleteUser;