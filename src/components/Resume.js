    import React from 'react';
    import { makeStyles } from '@material-ui/core/styles';
    import { Typography, Box } from '@material-ui/core';
    import Navbar from  './Navbar';

    const useStyles = makeStyles(theme=>({
        mainContainer: {
            background: "#262626"  
        },
        timeLine: {
            position: "relative",
            padding: "1rem",
            margin: "0 auto",
            "&:before": {
                content: "''",
                position: "absolute",
                height:  "100%",
                border: "1px solid #fe53bb",
                right: "40px",
                top: "0"
            },
            "&:after": {
                content: "''",
                display: "table",
                clear: "both",
            },
            [theme.breakpoints.up("md")]:{
                padding: "2rem",
                "&:before": {
                    left: "calc(50% - 1px)",
                    right: "auto",  
                }
            }
        },
        timeLineItem: {
            padding: "1rem",
            position: "relative",
            margin: "1rem 3rem 1rem 1rem",
            clear: "both",
            "&:after": {
                content: "''",
                position: "absolute"
            },
            "&:before": {
                content: "''",
                position: "absolute",
                right: "-0.625rem",
                top: "calc(50% - 5px)",
                borderStyle: "solid",
                borderColor: "#ea00d9 #ea00d9 transparent transparent",
                borderWidth: "0.625rem",
                transform: "rotate(45deg)"
            }, 
            [theme.breakpoints.up("md")]: {
                width: "44%",
                margin: "1rem",
                "&:nth-of-type(2n)": {
                    float: "right",
                    margin: "1rem",
                    borderColor: "#ea00d9"
                },
                "&:nth-of-type(2n):before": {
                    right: "auto",
                    left: "-0.625rem",
                    borderColor: "transparent transparent #fe53bb #fe53bb"
                }
            }
        },
        timeLineYear: {
            textAlign: "center",
            maxWidth: "9.375rem",
            margin: "0 3 0 auto",
            fontSize: "1.8rem",
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            color: "#fff",
            lineHeight: 1,
            padding: "0.5rem 0 1rem",
            "&:before": {
                display: "none"
            },
            [theme.breakpoints.up("md")]: {
                textAlign: "center",
                margin: "0 auto",
                "&:nth-of-type(2n)": {
                    float: "none",
                    margin: "0 auto"
                },
                "&:nth-of-type(2n):before": {
                    display: "none",
                }
            }
        },
        heading: {
            color: "#fff",
            padding: "3rem 0",
            textTransform: "uppercase"
        },
        subHeading: {
            color: "#FE6B8B",
            padding: "0",
            textTransform: "uppercase"
        },
    }));

    const Resume = () => {
        const classes = useStyles();
        return (
            <>
            <Navbar />
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.heading}>
                    work history
                </Typography>
                <Box component="div" className={classes.timeLine}>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2020
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Project Manager
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: "#fe53bb"}}>
                            Posh Pods North West Ltd
                        </Typography>
                        <Typography variant="subtitle1" align="left" style={{color: "#fff"}}>
                            <ul>
                                <li>Maximised customer satisfaction through effective operational management aligned with quality standards and customer requirements.</li>
                                <li>Evaluated product and process disadvantages and suggested solutions including changes to processes, products or quality standards where warranted.</li>
                                <li>Improved advertising initiatives by executing social media and digital marketing campaigns.
                                Served as single point of contact for project scheduling and changes.</li>
                                <li>Interviewed and hired top contractor talent to complete projects on-time and under-budget.</li>
                            </ul>
                        </Typography>
                        
                    </Box> 
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2018
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            property manager
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: "#fe53bb"}}>
                            druce prime residential, london
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color: "#fff"}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto minima assumenda iste ullam, vero esse laudantium doloribus animi. Recusandae, ut.
                        </Typography>
                        
                    </Box> 
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2020
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            web design
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: "#fe53bb"}}>
                            company where worked
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color: "#fff"}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto minima assumenda iste ullam, vero esse laudantium doloribus animi. Recusandae, ut.
                        </Typography>
                        
                    </Box> 
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2020
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            web design
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: "#fe53bb"}}>
                            company where worked
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color: "#fff"}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto minima assumenda iste ullam, vero esse laudantium doloribus animi. Recusandae, ut.
                        </Typography>
                        
                    </Box> 
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2020
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            web design
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: "#fe53bb"}}>
                            company where worked
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color: "#fff"}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto minima assumenda iste ullam, vero esse laudantium doloribus animi. Recusandae, ut.
                        </Typography>
                        
                    </Box> 
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2020
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            web design
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: "#fe53bb"}}>
                            company where worked
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color: "#fff"}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto minima assumenda iste ullam, vero esse laudantium doloribus animi. Recusandae, ut.
                        </Typography>
                        
                    </Box> 
            </Box>
            
            </Box>
            </>
        )
    }

    export default Resume;  