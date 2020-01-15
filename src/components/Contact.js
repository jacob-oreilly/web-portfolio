import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { FormControlLabel, IconButton } from '@material-ui/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
        width: "50%",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function Contact() {
    const classes = useStyles();
    return (
        <div className="Contact" id="contact">
            <div class="container">
                <div class="row align-items-start justify-content-md-center">
                    <h2 style={{ color: '#FBEEC1' }}>Contact</h2>
                </div>
                <div style={{ marginTop: "10%" }} class="row align-items-start justify-content-md-center">
                    <Card className={classes.card}>
                        <div style={{ marginTop: "2%" }} class="container">
                            <div class="row align-items-start justify-content-md-center">
                                {/* <div class="col-xs-1 col-sm-1">
                                    <h5>Phone:</h5>
                                </div> */}
                                <div class="col-xs-12 col-sm-5">
                                    {/* <a href="tel:2182321749">218-232-1749</a> */}
                                    <FormControlLabel
                                        control={
                                            <a target="_top"
                                                rel="noopener noreferrer"
                                                href="tel:2182321749">
                                                <IconButton color="primary">
                                                    <FontAwesomeIcon icon="phone" />
                                                </IconButton>
                                            </a>
                                        }
                                        label={"218-232-1749"}
                                        labelPlacement="end"
                                    />
                                </div>
                            </div>
                            <div style={{ marginTop: "2%" }} class="row align-items-start justify-content-md-center">
                                {/* <div class="col-xs-1 col-sm-1">
                                    <h5>Email:</h5>
                                </div> */}
                                <div class="col-xs-12 col-sm-5">
                                    <FormControlLabel
                                        control={
                                            <a target="_top"
                                                rel="noopener noreferrer"
                                                href="mailto:Jacob_OReilly@outlook.com">
                                                <IconButton color="primary">
                                                    <FontAwesomeIcon icon="envelope" />
                                                </IconButton>
                                            </a>
                                        }
                                        label={"Jacob_OReilly@outlook.com"}
                                        labelPlacement="end"
                                    />
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Contact;