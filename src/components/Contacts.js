import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, withStyles} from '@material-ui/core/styles';
import { TextField, Typography, Button, Grid, Box} from '@material-ui/core';
import { SendIcon} from '@material-ui/icons';
import Navbar from './Navbar';

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "#ea00d9",
        },
        "& label": {
            color: "#fff",
        },
    },
})(TextField);

const Contacts = () => {
    return (
        <>
        <Navbar />
        <Box component="div">
            <Grid container justify="center">
                <Box component="form">
                    <Typography variant="h5">
                        hire or contact me
                    </Typography>
                    <InputField fullWidth={true} label="Name" variant="outlined" />
                </Box>
            </Grid>
        </Box>
        </>
    )
}

export default Contacts;

