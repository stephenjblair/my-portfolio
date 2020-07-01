import React, { Component}  from 'react';
import {  withStyles } from '@material-ui/core/styles';
import { TextField, Typography, Button, Grid, Box} from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';
import Navbar from './Navbar';
import * as emailjs from 'emailjs-com';


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
            borderColor: "#fff",
        }
        }
    },
})(TextField);

const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      margin: "1rem 25%",
      width: "50%",
      alignItems: "center"
    },
    label: {
      textTransform: 'uppercase',
    },
  })(Button);

class Contacts extends Component  {
    constructor(props){
        super(props);
        this.state = {
        name: "",
        email: "",
        contact_number: "",
        message: ""
        };
   
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
        handleChange = (e) => {
            this.setState({ [e.target.name]: e.target.value });
        };

        handleSubmit = (e) => {
            e.preventDefault();
            emailjs
            .sendForm(
                "gmail",
                "template_DWoRVNWg",
                ".contact_form_class",
                "user_0A2WJho4RFIZkNDKSkCsO"
            )
            .then()
            .catch();
            this.setState({
                name: "",
                email: "",
                contact_number: "",
                message: "",
            });
            alert('Your email has been sent!');
            e.target.reset();
        };
        render(){
            return (
                <>
                <Navbar />
                <Box component="div" style={{background: "#262626", height: "100vh"}}>
                    <Grid container justify="center">
                        <Box component="form" onSubmit={this.handleSubmit.bind(this)} className="contact_form_class">

                            <Typography variant="h5" style={{ color: "#fff", textAlign: "center", textTransform: "uppercase", margin: "6rem 0 3rem 0"}}>
                                hire or contact me
                            </Typography>

                            <InputField  fullWidth={true} label="Name" id="name" name="name" value={this.state.name} onChange={this.handleChange.bind(this)} variant="outlined" inputProps={{ style: { color:  "white", width: "50vw"}}} margin="dense" size="medium" /> <br />

                            <InputField fullWidth={true} label="Email" id="email" name="email" value={this.state.email} onChange={this.handleChange.bind(this)} variant="outlined" inputProps={{ style: { color:  "#fff"}}}  margin="dense" size="medium" /> <br/>

                            <InputField fullWidth={true} label="Contact Number" id="contact_number" name="contact_number" value={this.state.contact_number} onChange={this.handleChange.bind(this)} variant="outlined" inputProps={{ style: { color:  "#fff"}}}   margin="dense" size="medium"/> <br/>

                            <InputField fullWidth={true} label="Message" id="message" name="message" value={this.state.message} onChange={this.handleChange.bind(this)} variant="outlined" inputProps={{ style: { color:  "#fff"}}}   margin="dense" size="medium"/> <br/>

                            <StyledButton type="submit" onSubmit={this.handleSubmit.bind(this)} 
                            style={{ color: "fff" }} fullWidth={true} endIcon={<ArrowForward />}>
                                contact me 
                            </StyledButton>
                        </Box>
                    </Grid>
                </Box>
                </>
            );
        }
     };

        export default Contacts;

