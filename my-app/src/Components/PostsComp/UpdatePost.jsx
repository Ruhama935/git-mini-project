import { Input, FormControl, FormLabel, Modal, ModalDialog, DialogTitle, Stack, Button, DialogContent } from '@mui/joy';
import React, { useState, useContext } from 'react';
import axios from 'axios';
import PostContext from './PostContext';
import Add from '@mui/icons-material/Add';
import { InputTextarea } from "primereact/inputtextarea";


function UpdatePost() {
    const {post, setPosts } = useContext(PostContext)
    const [open, setOpen] = useState(false);

    const handleChange = async (e) => {
        const formData = { _id: `${post._id}` };
        const formElements = e.target.elements;
        formData['title'] = formElements[0].value
        formData['body'] = formElements[1].value
        const res = await axios.put('http://localhost:5000/api/posts', formData)
        setPosts(res.data);
    }
    return (
        <>
            <Button
                variant="outlined"
                color="neutral"
                onClick={() => setOpen(true)}>
                <i className="pi pi-file-edit" style={{ fontSize: '1rem', color: '#fc45a6b0' }}></i>
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog>
                    <DialogTitle>Update the post</DialogTitle>
                    <form
                        onSubmit={(e) => {
                            handleChange(e)
                            setOpen(false);
                        }}>
                        <Stack spacing={2}>
                            <FormControl>
                                <FormLabel>title</FormLabel>
                                <Input title="title" required defaultValue={post.title} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>body</FormLabel>
                                <InputTextarea name="body" rows={4} cols={30} required defaultValue={post.body} />
                            </FormControl>
                            <Button type="submit">Submit</Button>
                        </Stack>
                    </form>
                </ModalDialog>
            </Modal>
        </>
    )
}

export default UpdatePost;