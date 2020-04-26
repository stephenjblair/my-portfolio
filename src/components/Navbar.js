import React from 'react'
import { AppBar, Toolbar, ListItem, IconButton, ListItemText, AvatarDivider, List, ListItemIcon, Typography, Box, Avatar, Divider } from '@material-ui/core';
import { ArrowBack, AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons';
import {makeStyles} from '@material-ui/styles';
import avatar from  '../images/avatar.png';


const useStyles = makeStyles({
    menuSliderContainer: {
        width: 250,
        background: "#0abdc6",
        height: "30rem"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: "100px",
        height: "100px",
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
    const classes = useStyles()
    const barStyles = {
        position: "static",
        background: "#711c91"
    }
    return (
        <>
        <Box className={classes.menuSliderContainer} component="div">
            <Avatar className={classes.avatar} src={avatar} alt="Avatar-image" />
            <Divider />
            <List>
                {menuItems.map((lsItem, key) =>(
                <ListItem button key={key}>
                    <ListItemIcon>
                        {lsItem.listIcon}
                    </ListItemIcon>
                    <ListItemText primary={lsItem.listText} />
                </ListItem>
                    ))}
            </List>
        </Box>
        <Box component="nav">
            <AppBar position="static" style={barStyles}>
                <Toolbar>
                    <IconButton>
                        <ArrowBack style={{ color: "#ea00d9" }} />
                         </IconButton>
                         <Typography variant="h5">
                            Portfolio
                         </Typography>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar
