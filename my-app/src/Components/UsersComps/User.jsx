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
import { useState, useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteUser from './DeleteUser';
import UpdateUser from './UpdateUser';
import 'primeicons/primeicons.css';
import UserContext from './UserContext';

// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';


function User() {
    debugger
    const { user } = useContext(UserContext)
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
                    <i className="pi pi-user" style={{ fontSize: '2rem', color: '#fc45a6b0' }}>

                    </i>
                    <Typography level="h2">{user.name}</Typography>
                    <Divider inset="none" />
                    <List
                        size="sm"
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            mx: 'calc(-1 * var(--ListItem-paddingX))',
                        }}
                    >
                        <ListItem>
                            user name: {user.username}
                        </ListItem>
                        {user.email ? (<ListItem>
                            email: {user.email}
                        </ListItem>)
                            : (<ListItem>
                                No email given
                            </ListItem>)}
                        {user.address ? (<ListItem>
                            address: {user.address}
                        </ListItem>)
                            : (<ListItem>
                                No address given
                            </ListItem>)}
                        {user.phone ? (<ListItem>
                            phone: {user.phone}
                        </ListItem>)
                            : (<ListItem>
                                No phone given
                            </ListItem>)}
                    </List>
                    <Divider inset="none" />
                    <CardActions>
                        <DeleteUser user={user} />
                        <UpdateUser user={user} />
                    </CardActions>
                </Card>

            </Box>
        </>
    )
}

export default User;
