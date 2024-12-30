import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Typography from '@mui/joy/Typography';
import { useState, useEffect, useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteTask from './DeleteTask';
import UpdateTask from './UpdateTask';
import 'primeicons/primeicons.css';
import CompleteTask from './CompleteTask';
import TaskContext from './TaskContext';

// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';


function Task() {
    const { task } = useContext(TaskContext);
    const date = new Date(task.createdAt);
    const formattedDate = date.toLocaleString("he-IL", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(max(100%, 300px), 1fr))',
                    gap: 2,

                }}
            >
                <Card
                    size="lg"
                    variant="solid"
                    color="neutral"
                    invertedColors
                    sx={{
                        bgcolor: 'neutral.900',
                        margin: "2% 15% 2% 15%"
                    }}
                >
                    <Typography level="h2" sx={{ color: "#fc45a6b0" }}>{task.title}</Typography>
                    <Divider inset="none"/>
                    {task.tags ? <ListItem>
                        tags: {task.tags.join(",")}
                    </ListItem>
                        : <ListItem></ListItem>}
                    <ListItem>created at: {formattedDate}</ListItem>
                    <Divider inset="none" />
                    <CardActions>
                        <DeleteTask task={task} />
                        <UpdateTask task={task} />
                        <CompleteTask task={task} />
                    </CardActions>
                </Card>

            </Box>
        </>
    )
}

export default Task;
