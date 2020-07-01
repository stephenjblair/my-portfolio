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
                            <h4>WEB DEVELOPMENT</h4>
            
                            <li> Designed, implemented and monitored web pages and sites
                            for continuous improvement in a fast-paced environment. </li>
                            
                            <li>Oversaw troubleshooting of technical issues to solve
                            problems within a reasonable time frame. </li>
                            
                            <li>Converted mock-ups into HTML, JavaScript and CSS.
                            Completed full redesigns of existing websites to improve
                            navigation, enhance visuals and strengthen search engine
                            rankings. </li>
                        
                            <li>Kept abreast of emerging technologies, software and trends,
                            and applied them to projects. </li>

                            <h4>GENERAL DUTIES </h4>
                                
                            <li>Maximised customer satisfaction through effective
                            operational management aligned with quality standards and
                            customer requirements.</li>
            
                            <li>Evaluated product and process disadvantages and suggested
                            solutions including changes to processes, products or quality
                            standards where warranted. </li>

                            <li>Improved advertising initiatives by executing social media
                            and digital marketing campaigns. </li>

                            <li>Served as single point of contact for project scheduling and
                            changes.</li>
                        
                            <li>Interviewed and hired top contractor talent to complete
                            projects on-time and under-budget.</li> 

                            <li>Built strong community relations with subcontractors and
                            vendors to optimise cost savings and ensure timely
                            pre-construction completion. </li>

                            <li>Upheld quality standards by monitoring and correcting work.
                            Managed projects to successful completion and closeout,
                            including equipment and certificate securement. </li>

                            <li>Conducted technical and customer meetings to increase
                            communication and strengthen internal and external
                            relationships. </li>

                            <li>Modified layouts and promotional techniques to drive sales.
                            Supervised project schedules to meet key milestones at
                            every phase. </li>

                            <li>Led strategic planning sessions for site engineering, building
                            design, and construction management. </li>

                            <li>Elevated new business opportunities by implementing
                            effective networking strategies. </li>
                            
                            <li>Established relationships with construction manager and contractors to align priorities, goals and objectives. </li>
                            </ul>
                        </Typography>
                        
                    </Box> 
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2018
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Property manager
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: "#fe53bb"}}>
                            Druce Prime residential, London
                        </Typography>
                        <Typography variant="subtitle1" align="left" style={{color: "#fff"}}>
                           <ul>
                            <li>Collected, completed, and processed lease applications.
                            Established key relationships with potential leasers and
                            renters. </li>
                            
                            <li>Created and submitted daily reports on leasing activities.</li>

                            <li> Ensured property is attractive and appealing for prospects. </li>

                            <li> Managed Inventory and property inspection documents for
                            permanent records and regulatory requirements. </li>

                            <li> Conducted inspections of property grounds, buildings and
                            equipment to identify maintenance concerns and direct
                            timely repairs. </li>
                        
                            <li>Kept properties in compliance with local, state and federal
                            regulations, including prohibiting any form of discrimination
                            in operational practices. </li>
                            </ul>
                        </Typography>
                        
                    </Box> 
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2006
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Personal Trainer & Assistant Manager
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: "#fe53bb"}}>
                            Fitness First Australia, Sydney
                        </Typography>
                        <Typography variant="subtitle1" align="left" style={{color: "#fff"}}>
                            <ul>
                                <li>Designed specific workout systems for individual clients based on performance ability.</li>

                                <li>Provided clients with safe and reasonable exercises to be performed at home or in gym settings.</li>

                                <li>Screened clients and performed client assessments. </li>

                                <li>Supplied clients with dietary restrictions and guidelines. </li>

                                <li>Grew customer base through word-of-mouth referrals based on customer satisfaction and results.</li>

                                <li>Educated customers on preventative care, nutrition, fitness, stress management and ergonomics.</li>
                                <li> Assistant mangement, recruitment, education and growth of original team of 10 person trainers to 42. </li>
                            </ul> 
                        </Typography>
                        </Box>
                        
            </Box>
            
            </Box>
            </>
        )
    }

    export default Resume;  