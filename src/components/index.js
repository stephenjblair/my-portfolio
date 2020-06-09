import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Particles from "react-particles-js";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    particlesCanva: {
        position: "absolute"
    }
})

const Home = () => {
    const classes = useStyles()

    return (
        <div>
            <Navbar />
            <Header />
            <Particles canvasClassName={classes.particlesCanva}
            params={{
                particles: {
                    number: {
                        value: 65,
                        density: {
                            enable: true,
                            value_area: 900
                        }
                    },
                    shape: {
                        type: "triangle",
                        stroke: {
                            width: 1,
                            color: "#ea00d9"
                        }
                    },
                    size: {
                        value: 1,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 8,
                            size_min: 0.1,
                            sync: true
                        }
                    },
                    opacity: {
                        value: 1,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: true
                        }
                    }
                }
            }}
            />

            
        </div>
    )
}

export default Home;
