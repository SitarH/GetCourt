import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import AccountBox from '@mui/icons-material/AccountBox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function ResponsiveDrawer(props) {

    const navigate = useNavigate();

    const { window } = props;
    const [open, setOpen] = useState(true);

    const handleDrawerToggle = () => {
        setOpen((prev) => !prev);
    };

    const drawer = (
        <div>
            {/* <Toolbar /> */}
            <Divider />
            <List>
                {['Profile', 'Payments', 'History', 'Friends', 'Contact', 'Settings'].map((text, index) => (
                    <ListItem key={text} >
                        {text[index]= <AccountBox/>}
                        <ListItemButton onClick={() => {handleDrawerToggle() ; navigate(`/${text}`)}}>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box >
            {open ?
                <>
                    <Toolbar>
                        {/* <IconButton
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle} >
                            <MenuIcon />
                        </IconButton> */}
                    </Toolbar>
                    <Box>
                        <Drawer
                            container={container}
                            variant="temporary"
                            open={open}
                            onClose={handleDrawerToggle} >
                            {drawer}
                        </Drawer>
                    </Box>
                </> : null }
                
            {/* {open ? 
            <Toolbar>
                <IconButton
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle} >
                    <MenuIcon />
                </IconButton>
            </Toolbar> : null}
            <Box >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={open}
                    onClose={handleDrawerToggle} >
                    {open ?
                        <Toolbar>
                            <IconButton
                                aria-label="close drawer"
                                edge="start"
                                onClick={handleDrawerToggle}>
                                <MenuIcon />
                            </IconButton>
                        </Toolbar> : null}
                    {drawer}
                </Drawer>
            </Box> */}
        </Box>
    );
}

ResponsiveDrawer.propTypes = {

    window: PropTypes.func,
};

export default ResponsiveDrawer;
