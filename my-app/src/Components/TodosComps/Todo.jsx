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
import { useState, useEffect , useContext} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteTodo from './DeleteTodo';
import UpdateTodo from './UpdateTodo';
import 'primeicons/primeicons.css';
import CompleteTodo from './CompleteTodo';
import TodoContext from './TodoContext';

// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';


function Todo() {
    const {todo} = useContext(TodoContext);
    const date = new Date(todo.createdAt);
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
                        margin: "2% 10% 2% 10%"
                    }}
                >
                    {/* <i className="pi pi-todo" style={{ fontSize: '2rem', color: 'red' }}>
                        
                    </i> */}
                    <Typography level="h2">{todo.title}</Typography>
                    <Divider inset="none" />
                    {todo.tags ? <ListItem>
                        tags: {todo.tags.join(",")}
                    </ListItem>
                        : <ListItem></ListItem>}
                    <ListItem>created at: {formattedDate}</ListItem>
                    {/* <List
                        size="sm"
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            mx: 'calc(-1 * var(--ListItem-paddingX))',
                        }}
                    >
                        <ListItem>
                            todo name: {todo.todoname}
                        </ListItem>
                        {todo.email ? (<ListItem>
                            email: {todo.email}
                        </ListItem>)
                            : (<ListItem>
                                No email given
                            </ListItem>)}
                        {todo.address ? (<ListItem>
                            address: {todo.address}
                        </ListItem>)
                            : (<ListItem>
                                No address given
                            </ListItem>)}
                        {todo.phone ? (<ListItem>
                            phone: {todo.phone}
                        </ListItem>)
                            : (<ListItem>
                                No phone given
                            </ListItem>)}
                    </List> */}
                    <Divider inset="none" />
                    <CardActions>
                        {/* <Button endDecorator={<KeyboardArrowRight />}>Start now</Button> */}
                        {/* <Button
                            color="primary"
                            disabled={false}
                            loading={false}
                            onClick={function () { }}
                            size="md"
                            variant="outlined"
                            width="5%"
                        /> */}
                        {/* <Button variant="outlined" >Delete</Button> */}
                        <DeleteTodo todo={todo} />
                        <UpdateTodo todo={todo} />
                        <CompleteTodo todo={todo} />
                        {/* <Button variant="outlined">Update</Button> */}

                    </CardActions>
                </Card>

            </Box>
        </>
    )
}

export default Todo;
