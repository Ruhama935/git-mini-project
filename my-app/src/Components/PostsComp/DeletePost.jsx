import { Input, FormControl, FormLabel, Modal, ModalDialog, DialogTitle, Stack, Button, DialogContent } from '@mui/joy';
import React, { useState, useContext } from 'react';
import axios from 'axios';
import PostContext from './PostContext';

function DeletePost() {
    const { post, setPosts } = useContext(PostContext)
    const [open, setOpen] = useState(false);

    const handleChange = async () => {
        try {
            const res = await axios.delete(`http://localhost:5000/api/posts/${post._id}`);
            setPosts(res.data || []);
        } catch (e) { console.log(e); return; }
    }
    return (
        <>
            <Button
                variant="outlined"
                color="neutral"
                onClick={() => setOpen(true)}>
                <i className="pi pi-trash" style={{ fontSize: '1rem', color: '#fc45a6b0' }}></i>
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog>
                    <DialogTitle>Are you sure you want to delete the post?</DialogTitle>
                    <Button onClick={(e) => {
                        setOpen(false)
                        handleChange()
                    }}>
                        yes
                    </Button>
                    <Button variant="outlined" onClick={() => setOpen(false)}>no</Button>
                </ModalDialog>
            </Modal>
        </>
    )
}

export default DeletePost;