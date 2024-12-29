import {Input,FormControl,FormLabel,Modal,ModalDialog,DialogTitle,Stack,Button,DialogContent} from '@mui/joy';
import React, {useState,useContext} from 'react';
import axios from 'axios';
import UserContext from './UserContext';
import Add from '@mui/icons-material/Add';

function CreateUser(prop) {
    const {setUsers} = prop
    const [open, setOpen] = useState(false);

    const handleChange = async(e)=>{
        debugger
        e.preventDefault(); // למנוע את פעולת ברירת המחדל
        const formData = {};
        const formElements = e.target.elements;
        for (let element of formElements) {
            if (element.name) {
                formData[element.name] = element.value;
            }}
            
        setUsers((await axios.post('http://localhost:5000/api/users',formData)).data);
        
    }
    return (
        <>
            <Button
                variant="outlined"
                color="neutral"
                startDecorator={<Add />}
                style={{margin: "6%  0% 0% 10%"}}
                onClick={() => setOpen(true)}
            >
                New user
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog>
                    <DialogTitle>Create new user</DialogTitle>
                    <form
                        onSubmit={(e)=>{
                            handleChange(e)
                            setOpen(false);
                        }}
                    >
                        <Stack spacing={2}>
                            <FormControl>
                                <FormLabel>name</FormLabel>
                                <Input name="name" autoFocus />
                            </FormControl>
                            <FormControl>
                                <FormLabel>user name</FormLabel>
                                <Input name="username" required />
                            </FormControl>
                            <FormControl>
                                <FormLabel>email</FormLabel>
                                <Input name="email"/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>address</FormLabel>
                                <Input name="address"/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>phone</FormLabel>
                                <Input name="phone"/>
                            </FormControl>
                            <Button type="submit">Submit</Button>
                        </Stack>
                    </form>
                </ModalDialog>
            </Modal>
        </>
    )
}

export default CreateUser;