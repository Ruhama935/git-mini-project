import {Input,FormControl,FormLabel,Modal,ModalDialog,DialogTitle,Stack,Button,DialogContent} from '@mui/joy';
import React, {useState,useContext} from 'react';
import axios from 'axios';
import UserContext from './UserContext';
import EditIcon from '@mui/icons-material/Edit';

function UpdateUser() {
    debugger
    const {user, setUsers} = useContext(UserContext)
    const [open, setOpen] = useState(false);

    const handleChange = async(e)=>{
        const formData = {_id: `${user._id}`};
        const formElements = e.target.elements;
        for (let element of formElements) {
            if (element.name) {
                formData[element.name] = element.value;
            }}
        const res = await axios.put('http://localhost:5000/api/users',formData)
        setUsers(res.data);
    }
    return (
        <>
            <Button
                variant="outlined"
                color="neutral"
                onClick={() => setOpen(true)}
            >
                <i className="pi pi-user-edit" style={{ fontSize: '1rem', color: '#f83b93b0' }}></i>
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog>
                    <DialogTitle>Update the user</DialogTitle>
                    <form
                        onSubmit={(e)=>{
                            handleChange(e)
                            setOpen(false);
                        }}
                    >
                        <Stack spacing={2}>
                            <FormControl>
                                <FormLabel>name</FormLabel>
                                <Input name="name" autoFocus defaultValue={user.name}/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>user name</FormLabel>
                                <Input name="username" required defaultValue={user.username}/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>email</FormLabel>
                                <Input name="email" defaultValue={user.email}/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>address</FormLabel>
                                <Input name="address" defaultValue={user.address}/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>phone</FormLabel>
                                <Input name="phone" defaultValue={user.phone}/>
                            </FormControl>
                            <Button type="submit">Submit</Button>
                        </Stack>
                    </form>
                </ModalDialog>
            </Modal>
        </>
    )
}

export default UpdateUser;