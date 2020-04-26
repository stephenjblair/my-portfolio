import React, { useState } from 'react'
import { AppBar, Toolbar, ListItem, IconButton, ListItemText, AvatarDivider, List, ListItemIcon, Typography, Box, Avatar, Divider } from '@material-ui/core';
import { ArrowBack, AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons';
import {makeStyles} from '@material-ui/styles';
import MobileRightMenuSlider from '@material-ui/core/Drawer';
import avatar from  '../images/avatar.png';


const useStyles = makeStyles({
    menuSliderContainer: {
        width: 250,
        background: "#133e7c",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: "100px",
        height: "100px",
    },
    listItem: {
        color: "#fff"
    }
});

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume"
    },
    {
        listIcon: <Apps />,
        listText: "Portfolio"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contacts"
    },
]
const Navbar = () => {
    const [state, setState] = useState({
        right: false
    });
    const toggleSlider = ((slider, open) => () => {
        setState({...state, [slider]: open });
    });
    const classes = useStyles();
    const sideList = slider => (
                <Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider(slider, false)}>
            <Avatar className={classes.avatar} src={avatar} alt="Avatar-image" />
            <Divider />
            <List>
                {menuItems.map((lsItem, key) =>(
                <ListItem button key={key}>
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
        background: "#711c91"
    }
    return (
        <>
        <Box component="nav">
            <AppBar position="static" style={barStyles}>
                <Toolbar>
                    <IconButton onClick={toggleSlider('right', true)}>
                        <ArrowBack style={{ color: "#ea00d9" }} />
                         </IconButton>
                         <Typography variant="h5">
                            Portfolio
                         </Typography>
                         <MobileRightMenuSlider anchor='right'
                             open={state.right}
                             onClose={toggleSlider('right', false)}>
                             {sideList('right')}
                         </MobileRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar
