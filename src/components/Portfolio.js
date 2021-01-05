import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Navbar from  './Navbar';
import { Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import adviceApp from '../images/adviceApp.png';
import beachResort from '../images/beach-resort.png'
import instaclone from '../images/instaclone.png';
import weather from '../images/weather.png';
import poshpods from '../images/poshpods.png';
import numbers from '../images/numbers.png';
import party from '../images/party.png';
import empire from '../images/empire.png';
import movie from '../images/movie.png';
import littleworld from '../images/littleworld.png';


const useStyles = makeStyles({
    mainContainer: {
        background: "#262626",
        display: "flex",
        flexDirection: "column"

    },
    cardContainer: {
        width: "80%",
        minHeight: "400px",
        display: "block",
        flex: 1,
        textAlign: "inherit",
        border: "1px solid #ea00d9",
        margin: " 3rem 2rem 2rem 3rem",
        padding: "0.5rem",
        },

    cardImage: {
        width: "100%",
        height: "auto",
    },
});

const Portfolio =() => {
    const classes = useStyles();
    return(
        <Box component="div" className={classes.mainContainer}>
            <Navbar />
        <Grid container justify="center" align-items="center">
                        {/* Project 1 */}
                        <Grid item xs={12} sm={8} md={4}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia className={classes.cardImage} component="img" alt="Project 1" height="200" image={beachResort}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Beach Resort
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                         Luxury room finder using React, Context API and Contenful.
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href="https://github.com/stephenjblair/beach-resort" target="_blank">
                            GitHub
                        </Button>
                        <Button size="small" color="primary" href="https://beach-resort-nine.vercel.app/" target="_blank">
                            Live Demo
                        </Button>
                    </CardActions>
                
            </Card>
            </Grid>
            {/* Project 2 */}
            <Grid item xs={12} sm={8} md={4}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia className={classes.cardImage} component="img" alt="Project 1" height="200" image={instaclone}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Instagram Clone
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                         Fully deployed Instagram Clone using React & Firebase
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href="https://github.com/stephenjblair/instagram-clone" target="_blank">
                            GitHub
                        </Button>
                        <Button size="small" color="primary" href="https://instagram-clone-ceada.web.app/" target="_blank">
                            Live Demo
                        </Button>
                    </CardActions>
                
            </Card>
            </Grid>
            {/* Project 3 */}
            <Grid item xs={12} sm={8} md={4}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia component="img" alt="Project 1" image={weather}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Weather App
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Five day weather forecast with React, Axios and Manchester Code's weather API.
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href="https://github.com/stephenjblair/new-weather-app">
                            GitHub
                        </Button>
                        <Button size="small" color="primary" href="https://sharp-swanson-c91733.netlify.app/">
                            Live Demo
                        </Button>
                    </CardActions>
                
            </Card>
            </Grid>
             {/* Project 4 */}
            <Grid item xs={12} sm={8} md={4}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia className={classes.cardImage} component="img" alt="Project 1"  image={adviceApp}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Advice App
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Gain some wisdom from this advice app, using React and the Advice Slip Json API.
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href="https://github.com/stephenjblair/advice-app" target="_blank">
                            GitHub
                        </Button>
                        <Button size="small" color="primary" href="https://advice-app-pi.now.sh/">
                            Live Demo
                        </Button>
                    </CardActions>
                
            </Card>    
            </Grid>
           

            {/* Project 5 */}
            <Grid item xs={12} sm={8} md={4}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia component="img" alt="Project 1" image={poshpods}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Posh Pods 
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Commerical project using React and Hubspot CRM integration. 
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href="https://github.com/stephenjblair/posh-pods-website">
                            GitHub
                        </Button>
                        <Button size="small" color="primary" href="https://www.poshpods.com">
                            Live Demo
                        </Button>
                    </CardActions>
                
            </Card>    
            </Grid>
            {/* Project 6 */}
            <Grid item xs={12} sm={8} md={4}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia component="img" alt="Project 1"  image={empire}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Empire of the Sun
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            My first website! Band fan page using HTML, CSS and JS.
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href="https://github.com/stephenjblair/ucd-project">
                            GitHub
                        </Button>
                        <Button size="small" color="primary" href="https://ucd-project.now.sh/">
                            Live Demo
                        </Button>
                    </CardActions>
                
            </Card>
            </Grid>

           
            {/* Project 7 */}
            <Grid item xs={12} sm={8} md={4}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia component="img" alt="Project 1"  image={party}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Party Safari
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Plan your night out in any city! Using HTML, CSS, JS and Google Maps/Places API.
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href="https://github.com/stephenjblair/ifed-project">
                            GitHub
                        </Button>
                        <Button size="small" color="primary" href="https://ifed-project.now.sh/">
                            Live Demo
                        </Button>
                    </CardActions>
                
            </Card>    
            </Grid>
            {/* Project 8 */}
            <Grid item xs={12} sm={8} md={4}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia component="img" alt="Project 1" image={numbers}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Numbers Game
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            A simple numbers game for state management using React.
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href="https://github.com/stephenjblair/numbers-game">
                            GitHub
                        </Button>
                        <Button size="small" color="primary" href="https://numbers-game-zeta.now.sh/">
                            Live Demo
                        </Button>
                    </CardActions>
                
            </Card>
            </Grid>

            {/* Project 9 */}
            <Grid item xs={12} sm={8} md={4}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia component="img" alt="Project 1" image={movie}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            React Movie Search
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Search and retrieve movie imformation from The Movie DB API using this React App.
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href="https://github.com/stephenjblair/react-movie-search">
                            GitHub
                        </Button>
                        <Button size="small" color="primary" href="https://react-movie-search.now.sh/">
                            Live Demo
                        </Button>
                    </CardActions>
                
            </Card>    
            </Grid>
            {/* Project 10 */}
            <Grid item xs={12} sm={8} md={4}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia component="img" alt="Project 1" image={littleworld}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Little World Market
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Commerical project for a vegetarian market and cafeusing HTML, CSS, JS & Bootstrap
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href="https://github.com/stephenjblair/littleworld-final">
                            GitHub
                        </Button>
                        <Button size="small" color="primary" href="https://www.littleworldmarket.co.uk/">
                            Live Demo
                        </Button>
                    </CardActions>
               
            </Card>    
            </Grid>
        </Grid>
        </Box>
    )
}
export default Portfolio;
