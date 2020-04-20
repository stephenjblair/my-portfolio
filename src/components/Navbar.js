import React from 'react'
import { AppBar, Toolbar, ListItem, IconButton, ListItemText, AvatarDivider, List, Typography, Box } from '@material-ui/core';
import { ArrowBack, AssignmentInd, HomeIcon, Apps, ContactMail } from '@material-ui/icons';


const Navbar = () => {
    return (
        <Box component="nav">
            <AppBar position="static" style={{ background: "#711c91" }}>
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
    )
}

export default Navbar
