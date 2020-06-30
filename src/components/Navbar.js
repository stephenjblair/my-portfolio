import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {makeStyles} from '@material-ui/styles'; 
import MobileLeftMenuSlider from '@material-ui/core/Drawer';
import { AppBar, Toolbar, ListItem, IconButton, ListItemText, List, ListItemIcon, Box, Avatar, Divider } from '@material-ui/core';
import {ArrowBack, AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons';
import circle from '../images/neonring_pink.png';


const useStyles = makeStyles({
    menuSliderContainer: {
        width: 250,
        background: "#1a1a1a",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: "100px",
        height: "100px",
    },
    circle: {
        display: "block",
        margin: "0.5rem auto",
        width: "120px",
        height: "120px"
    },
    listItem: {
        color: "#fff"
    }
});

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home",
        listPath: '/'
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps />,
        listText: "Portfolio",
        listPath: "/portfolio"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contacts",
        listPath: "/contacts"
    },
    {
        listIcon: <ArrowBack />,
        listText: "",
        listPath: "/"
    },
]
const Navbar = () => {
    const [state, setState] = useState({
        left: false
    });
    const toggleSlider = ((slider, open) => () => {
        setState({...state, [slider]: open });
    });
    const classes = useStyles();
    const sideList = slider => (
                <Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider(slider, false)}>
            <Avatar className={classes.circle} src={circle} alt="Avatar-image" />
            <Divider />
            <List>
                {menuItems.map((lsItem, key) =>(
                <ListItem button key={key} component={Link} to={lsItem.listPath}>
                    <ListItemIcon className={classes.listItem}>
                        {lsItem.listIcon}
                    </ListItemIcon>
                    <ListItemText className={classes.listItem}  primary={lsItem.listText} />
                </ListItem>
                    ))}

            </List>
        </Box>
    )


    const barStyles = {
        position: "static",
        background: "#1a1a1a",
        borderBottom: "1px solid #ea00d9",
        textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
    }
    return (
        <>
        <Box component="nav">
            <AppBar position="static" style={barStyles}>
                <Toolbar>
                    <IconButton onClick={toggleSlider('left', true)}>
                        <Apps style={{ color: "#ea00d9" }} />
                         </IconButton>
                         <MobileLeftMenuSlider anchor='left'
                             open={state.left}
                             onClose={toggleSlider('left', false)}>
                             {sideList('left')}
                         </MobileLeftMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar;
