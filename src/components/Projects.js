import React from 'react';
import { Typography } from '@material-ui/core';
import BailSafe from '../img/bailsafe.jpg';
import AveryAndDuncan from '../img/averyandduncan.jpg';

function Projects() {
    return (
        <div className="Projects" id="projects">
            <div className="container">
                <div className="row align-items-start justify-content-md-center">
                    <h2 style={{ color: '#FBEEC1' }}>Projects</h2>
                </div>
                <div className="row align-items-start justify-content-md-start">
                    <h3 style={{ color: '#8D8741' }}>BailSafe</h3>
                </div>
                <div className="row align-items-start justify-content-md">
                    <div className="col-lg-6 col-sm-12">
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
                    <div className="col-lg-6 col-sm-12">
                        <img alt="BailSafe" style={{ width: "45%", height: "45%" }} src={BailSafe}></img>
                    </div>
                    <div style={{marginTop: "10%"}} className="row align-items-start justify-content-md-start">
                        <h3 style={{ color: '#8D8741' }}>AveryAndDuncan.com</h3>
                    </div>
                    <div className="row align-items-start justify-content-md">
                        <div className="col-lg-6 col-sm-12">
                            <Typography align="left" color="primary" paragraph={true}>
                                AveryAndDuncan.com was the first one of the first projects I did.
                                I had a couple of friends that were in a band together. The needed a
                                place to post updates on when shows were and show all the videos
                                they recorded. This project allowed me to get my first bit of taste with
                                HTML and CSS.
                        </Typography>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <img alt="AveryAndDuncan.com" style={{ width: "100%", height: "100%" }} src={AveryAndDuncan}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;