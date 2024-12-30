import { Link } from 'react-router-dom'
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PersonIcon from '@mui/icons-material/Person';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
import zIndex from '@mui/material/styles/zIndex';

function Homepage() {
    const [value, setValue] = React.useState(0);

    return (
        <Box sx={{ width: 500 }} style={{ width: "100%", position: "fixed", zIndex: "1000"}}>
            <BottomNavigation
                showLabels
                value={value}
                
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction component={Link} to="users" label="Users" icon={<PersonIcon />} />
                <BottomNavigationAction component={Link} to="posts" label="Posts" icon={<StickyNote2OutlinedIcon />} />
                <BottomNavigationAction component={Link} to="tasks" label="Tasks" icon={<PlaylistAddCheckOutlinedIcon />} />
            </BottomNavigation>
        </Box>
    );
}

export default Homepage