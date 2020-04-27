import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import Typed from 'react-typed';


const useStyles = makeStyles(theme => ({
    title: {
        color: '#fff',
        textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
    },
    subTitle: {
        color: "#fff",
        textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: "1"
    },
}))
const Header = () => {
    const classes = useStyles()
    return (
        <Box className={classes.typedContainer}>
            <Typography className={classes.title} variant="h4">
                <Typed strings={["Stephen John Blair"]} typeSpeed={40} />
            </Typography>
            <br/>
            <Typography className={classes.subTitle} variant="h5">
                <Typed 
                strings={["Web Design", "Web Development", "MERN Stack"]} typeSpeed={40} backSpeed={60} loop/>
            </Typography>
        </Box>
    );
};

export default Header; 