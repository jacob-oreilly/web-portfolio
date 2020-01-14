import React from 'react';
import { Typography, Grid, makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';

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
    }
});

function About() {
    const classes = useStyles();
    return (
       <div className="About" id="about">
            <h2 style={{color: '#FBEEC1'}}>A little about me...</h2>
            <Grid
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center">
                <Grid item>
                <ThemeProvider theme={theme}>
                    <Typography color="primary" className={classes.paragraph} paragraph={true}>
                        I'm a Software Engineer who loves to be challenged and learn
                        new things. In my free time I enjoy working on my own projects, 
                        play video games with friends, and get outside on a mountain bike ride!
                    </Typography>
                </ThemeProvider> 
                </Grid>
            </Grid>
       </div> 
    );
}

export default About