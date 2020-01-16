import React from 'react';
import { Typography, makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    paragraph: {
        primary: '#FBEEC1',
    }

}))

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FBEEC1',
        }
    },
    typography: {
        color: '#FBEEC1',
        fontSize: 16,
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
});

function About() {
    const classes = useStyles();
    return (
        <div className="About" id="about">
            <div className="container">
                <div className="row align-items-start justify-content-md-center">
                    <div className="col">
                        <h2 style={{ color: '#FBEEC1', width: "100%" }}>A little about me...</h2>
                    </div>
                </div>
                <div className="row align-items-center justify-content-md-center">
                    <div className="col-sm col-lg-12">
                        <ThemeProvider theme={theme}>
                            <Typography align="justify" color="primary" className={classes.paragraph} paragraph={true}>
                                I'm a Software Engineer who loves to be challenged and learn new things.
                                On the weekends you will most likely find me out on the trails. I like to
                                spend as much time as I can riding my mountain bike and crushing my Strava
                                times or atleast fall trying! When I'm not riding a bike, I enjoy hanging out with friends, and dreaming
                                up the next big app that I might develope.
                            </Typography>
                        </ThemeProvider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About