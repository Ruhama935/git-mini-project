import { Input, FormControl, FormLabel, Modal, ModalDialog, DialogTitle, Stack, Button, DialogContent } from '@mui/joy';
import React, { useState, useContext } from 'react';
import axios from 'axios';
import TodoContext from './TodoContext';
import Add from '@mui/icons-material/Add';

function UpdateTodo() {
    const { todo, setTodos } = useContext(TodoContext)
    const [open, setOpen] = useState(false);

    const handleChange = async (e) => {
        const formData = { _id: `${todo._id}` };
        const formElements = e.target.elements;
        formData['title'] = formElements[0].value
        formData['tags'] = formElements[1].value.split(',') || []
        debugger
        const res = await axios.put('http://localhost:5000/api/todos', formData)
        if (res.status === 200)
            console.log("success")
        setTodos(res.data);
    }
    return (
        <>
            <Button
                variant="outlined"
                color="neutral"
                onClick={() => setOpen(true)}
            >
                <i className="pi pi-pencil" style={{ fontSize: '1rem', color: 'red' }}></i>
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog>
                    <DialogTitle>Update the todo</DialogTitle>
                    <form
                        onSubmit={(e) => {
                            // debugger
                            handleChange(e)
                            setOpen(false);
                        }}
                    >
                        <Stack spacing={2}>
                            <FormControl>
                                <FormLabel>title</FormLabel>
                                <Input title="title" required defaultValue={todo.title} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>tags (separate with ',')</FormLabel>
                                <Input name="tags" defaultValue={todo.tags} />
                            </FormControl>
                            <Button type="submit">Submit</Button>
                        </Stack>
                    </form>
                </ModalDialog>
            </Modal>
        </>
    )
}

export default UpdateTodo;