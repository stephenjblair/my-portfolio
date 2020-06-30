import React from 'react';
import { makeStyles, withStyles} from '@material-ui/core/styles';
import { TextField, Typography, Button, Grid, Box} from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';
import Navbar from './Navbar';


const useStyles = makeStyles((theme)    =>({
    form: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
    },
    button: {
        marginTop: "1rem",
        color: "#fff",
        borderColor: "#fe53bb",
        fontSize: "1.2rem",
        width: "25vw",
        marginLeft: "25%",
        marginRight: "25%"
        
    },
    fields: {
        width: "50vw",
    },

}));
const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "#ea00d9",
        },
        "& label": {
            color: "#fff",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset" :{
                borderColor: "#fe53bb",  
            },
        "&:hover fieldset": {
            borderColor: "#fe53bb",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#fe53bb",
        }
        }
    },
})(TextField);

const Contacts = () => {
    const classes = useStyles();

    return (
        <>
        <Navbar />
        <Box component="div" style={{background: "#262626", height: "100vh"}}>
            <Grid container justify="center">
                <Box component="form" className={classes.form}>
                    <Typography variant="h5" style={{ color: "#fff", textAlign: "center", textTransform: "uppercase"}}>
                        hire or contact me
                    </Typography>
                    <InputField className ={classes.fields} fullWidth={true} label="Name" variant="outlined" inputProps={{ style: { color:  "white"}}} margin="dense" size="medium" /> <br />
                    <InputField fullWidth={true} label="Email" variant="outlined" inputProps={{ style: { color:  "#fff"}}}  margin="dense" size="medium" /> <br/>
                    <InputField fullWidth={true} label="Company Name" variant="outlined" inputProps={{ style: { color:  "#fff"}}}   margin="dense" size="medium"/> <br/>
                    <Button className={classes.button} variant="outlined" fullWidth={true} endIcon={<ArrowForward />}>
                        contact me 
                    </Button>
                </Box>
            </Grid>
        </Box>
        </>
    );
};

export default Contacts;

