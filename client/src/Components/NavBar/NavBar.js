import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { SidebarData } from './SidebarData';

function ResponsiveDrawer(props) {

    const navigate = useNavigate();

    const { window, togglenavbar, setToggleNav } = props;

    const handleDrawerToggle = () => {
        setToggleNav((prev) => !prev)
    };

    const drawer = (
        <div style={{ backgroundColor: '#F2C67D', height: '100vh', width: '200px' }}>

            <List>
                {SidebarData.map((item, index) => (
                    <ListItem style={{ marginBottom: '20px' }} key={index} >
                        {item.icon}
                        <ListItemButton
                            onClick={() => {
                                setToggleNav(false);
                                navigate(`${item.path}`)
                            }}>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box >

            <Box>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={togglenavbar}
                    onClose={handleDrawerToggle} >
                    {drawer}
                </Drawer>
            </Box>

        </Box>
    );
}

ResponsiveDrawer.propTypes = {

    window: PropTypes.func,
};

export default ResponsiveDrawer;
