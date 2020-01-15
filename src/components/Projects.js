import React from 'react';
import { Typography, CardMedia, Card, makeStyles, createMuiTheme } from '@material-ui/core';
import BailSafe from '../img/bailsafe.jpg';

const useStyles = makeStyles(them => ({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 25,
    }
}))

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FBEEC1',
        }
    }
});

function Projects() {
    const classes = makeStyles();
    return (
        <div className="Projects" id="projects">
            <div class="container">
                <div class="row align-items-start justify-content-md-center">
                    <h2 style={{ color: '#FBEEC1' }}>Projects</h2>
                </div>
                <div class="row align-items-start justify-content-md-start">
                    <h3>BailSafe</h3>
                </div>
                <div class="row align-items-start justify-content-md-start">
                    <div class="col-6">
                        <h5>About</h5>
                    </div>
                </div>
                <div class="row align-items-start justify-content-md">
                    <div class="col-6">
                        <Typography align="left" color="primary" paragraph={true}>
                            BailSafe is an Android application that pairs up with a Bluetooth sensor.
                            It's designed to keep you safe when you're out on a solo bike ride. If you fall
                            off your bike, the sensor in your seat detects that you're no longer on the seat.
                            This sends a message via bluetooth to the phone. If the user does not get back on the
                            bike for a set amount of time, the app will send a message of your location, and that
                            you have fallen, to your emergency contact. The techonologies my group and I used were
                            Kotlin for Android development, and Python for handling the switch connection and Bluetooth
                            message on a Raspberry Pi.
                    </Typography>
                    </div>
                    <div class="col-6">
                        <img style={{width: "45%", height: "45%"}} src={BailSafe}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;