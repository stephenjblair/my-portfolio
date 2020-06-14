import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Navbar from  './Navbar';
import { Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import reactLogo from '../images/reactLogo.png';


const useStyles = makeStyles({
    mainContainer: {
        background: "#262626",
        height: "100%",

    },
    cardContainer: {
        maxWidth: 345,
        margin: "3rem 5rem 0 auto",
        border: "1px solid #ea00d9",
        padding: "0.5rem"
    }
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
                    <CardMedia component="img" alt="Project 1" height="200" image={reactLogo}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            COVID-19 Data Project
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                         A live COVID-19 data tracker using React and Charts.js.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" href="https://github.com/stephenjblair/covid19-data" target="_blank">
                            GitHub
                        </Button>
                        <Button size="small" color="primary" href="https://covid19-data-mhaekxwhw.now.sh/" target="_blank">
                            Live Demo
                        </Button>
                    </CardActions>
                </CardActionArea>
            </Card>
            </Grid>
            {/* Project 2 */}
            <Grid item xs={12} sm={8} md={4}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia component="img" alt="Project 1" height="200" image={reactLogo}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Project 2 
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, laudantium.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            GitHub
                        </Button>
                        <Button size="small" color="primary">
                            Live Demo
                        </Button>
                    </CardActions>
                </CardActionArea>
            </Card>    
            </Grid>
            {/* Project 3 */}
            <Grid item xs={12} sm={8} md={4}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia component="img" alt="Project 1" height="200" image={reactLogo}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Project 3
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, laudantium.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            GitHub
                        </Button>
                        <Button size="small" color="primary">
                            Live Demo
                        </Button>
                    </CardActions>
                </CardActionArea>
            </Card>
            </Grid>
            {/* Project 4 */}
            <Grid item xs={12} sm={8} md={4}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia component="img" alt="Project 1" height="140" image={reactLogo}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Project 4
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, laudantium.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            GitHub
                        </Button>
                        <Button size="small" color="primary">
                            Live Demo
                        </Button>
                    </CardActions>
                </CardActionArea>
            </Card>    
            </Grid>
            {/* Project 5 */}
            <Grid item xs={12} sm={8} md={4}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia component="img" alt="Project 1" height="140" image={reactLogo}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Project 5
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, laudantium.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            GitHub
                        </Button>
                        <Button size="small" color="primary">
                            Live Demo
                        </Button>
                    </CardActions>
                </CardActionArea>
            </Card>
            </Grid>
            {/* Project 6 */}
            <Grid item xs={12} sm={8} md={4}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia component="img" alt="Project 1" height="140" image={reactLogo}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Project 6 
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, laudantium.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            GitHub
                        </Button>
                        <Button size="small" color="primary">
                            Live Demo
                        </Button>
                    </CardActions>
                </CardActionArea>
            </Card>    
            </Grid>
            {/* Project 7 */}
            <Grid item xs={12} sm={8} md={4}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia component="img" alt="Project 1" height="140" image={reactLogo}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Project 7
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, laudantium.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            GitHub
                        </Button>
                        <Button size="small" color="primary">
                            Live Demo
                        </Button>
                    </CardActions>
                </CardActionArea>
            </Card>
            </Grid>
            {/* Project 8 */}
            <Grid item xs={12} sm={8} md={4}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia component="img" alt="Project 1" height="140" image={reactLogo}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Project 8 
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, laudantium.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            GitHub
                        </Button>
                        <Button size="small" color="primary">
                            Live Demo
                        </Button>
                    </CardActions>
                </CardActionArea>
            </Card>    
            </Grid>
            {/* Project 9 */}
            <Grid item xs={12} sm={8} md={4}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia component="img" alt="Project 1" height="140" image={reactLogo}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Project 9 
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, laudantium.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            GitHub
                        </Button>
                        <Button size="small" color="primary">
                            Live Demo
                        </Button>
                    </CardActions>
                </CardActionArea>
            </Card>    
            </Grid>
        </Grid>
        </Box>
    )
}
export default Portfolio;
