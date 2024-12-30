import {Input,FormControl,FormLabel,Modal,ModalDialog,DialogTitle,Stack,Button,DialogContent} from '@mui/joy';
import  {useState,useContext} from 'react';
import axios from 'axios';
import TaskContext from './TaskContext';
import Add from '@mui/icons-material/Add';
import React, { useRef } from 'react';


function CreateTask(prop) {
    const { setTasks} = prop
    const [open, setOpen] = useState(false);

    const handleChange = async(e)=>{
        debugger
        e.preventDefault(); // למנוע את פעולת ברירת המחדל
        const formData = {};
        const formElements = e.target.elements;
        formData['title'] = formElements[0].value
        formData['tags'] = formElements[1].value.split(',') || []
            
        setTasks((await axios.post('http://localhost:5000/api/tasks',formData)).data);
        
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
                New task
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog>
                    <DialogTitle>Create new task</DialogTitle>
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
                                <FormLabel>tags (separate with ',')</FormLabel>
                                <Input name="tags"/>
                            </FormControl>
                            <Button type="submit">Submit</Button>
                        </Stack>
                    </form>
                </ModalDialog>
            </Modal>
        </>
    )
}

export default CreateTask;