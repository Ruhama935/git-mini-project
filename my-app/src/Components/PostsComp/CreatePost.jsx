import {Input,FormControl,FormLabel,Modal,ModalDialog,DialogTitle,Stack,Button,DialogContent} from '@mui/joy';
import React, {useState,useContext} from 'react';
import axios from 'axios';
// import PostContext from './PostContext';
import Add from '@mui/icons-material/Add';
import { InputTextarea } from "primereact/inputtextarea";


function CreatePost(prop) {
     const {setPosts} = prop
    const [open, setOpen] = useState(false);

    const handleChange = async(e)=>{
        const formData = {};
        const formElements = e.target.elements;
        formData['title'] = formElements[0].value
        formData['body'] = formElements[1].value
        setPosts((await axios.post('http://localhost:5000/api/posts',formData)).data);
    }
    return (
        <>
            <Button
                variant="outlined"
                color="neutral"
                startDecorator={<Add />}
                sx={{ borderColor: 'black' }}
                style={{margin: "6%  0% 0% 15%"}}
                onClick={() => setOpen(true)}
            >
                New post
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog>
                    <DialogTitle>Create new post</DialogTitle>
                    <form
                        onSubmit={(e)=>{
                            handleChange(e)
                            setOpen(false);
                        }}
                    >
                        <Stack spacing={2}>
                            <FormControl>
                                <FormLabel>title </FormLabel>
                                <Input name="title" required />
                            </FormControl>
                            <FormControl>
                                <FormLabel>body</FormLabel>
                                <InputTextarea name="body" rows={4} cols={30} required/>
                            </FormControl>
                            <Button type="submit">Submit</Button>
                        </Stack>
                    </form>
                </ModalDialog>
            </Modal>
        </>
    )
}

export default CreatePost;

