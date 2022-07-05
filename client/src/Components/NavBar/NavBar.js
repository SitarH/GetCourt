import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { SidebarData } from './SidebarData';



function ResponsiveDrawer(props, {togglenavbar, setToggleNav}) {
    console.log(togglenavbar);
    const navigate = useNavigate();
    const { window } = props;
    const [open, setOpen] = useState(true);

    const handleDrawerToggle = () => {
        setOpen((prev) => !prev);
        setToggleNav((prev) => !prev)
    };

    const drawer = (
        <>
            <Divider />
            <List>
                {SidebarData.map((item, index) => (
                    <ListItem key={index} >
                        {item.icon}
                        <ListItemButton 
                        onClick={() => { setToggleNav((prev) => !prev); 
                        navigate(`/${item.title}`)}}>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />

        </>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box >
            {/* {open && */}
                {/* <> */}
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
                {/* </> } */}
                
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
