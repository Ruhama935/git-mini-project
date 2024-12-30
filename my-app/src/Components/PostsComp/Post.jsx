import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import DeletePost from './DeletePost';
import UpdatePost from './UpdatePost';
import 'primeicons/primeicons.css';
import LikePost from './LikePost';
import PostContext from './PostContext';
import { useContext } from 'react';
// import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

function Post() {
    const { post } = useContext(PostContext)
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <Box
            sx={{
                width: '100%',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(max(100%, 300px), 1fr))',
                gap: 2,
            }}>
            <Card
                size="lg"
                variant="solid"
                color="neutral"
                invertedColors
                sx={{
                    bgcolor: 'neutral.900',
                    margin: "2% 15% 2% 15%"
                }}>
                <Typography level="h2" sx={{ color: "#fc45a6b0" }}>{post.title}</Typography>
                {post.body.trim().length > 50 ? <><ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Show the body of the post" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                    {open ? <><Divider inset="none" />
                        <p>{post.body}</p></> :
                        <></>}
                </>
                    : <><Divider inset="none" />
                        <p style={{ color: "white" }}>{post.body}</p></>}
                <Divider inset="none" />
                <CardActions>
                    <DeletePost />
                    <UpdatePost />
                    <LikePost />
                </CardActions>
            </Card>
        </Box>
    )
}

export default Post;
