import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { Grid, makeStyles, Avatar, Typography } from '@material-ui/core';
import CropBike from './img/cropbike.JPG';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginLeft: theme.spacing(10),
  },
  image: {
    backgroundImage: "url(" + CropBike + ")",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 50,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    direction: "row",
    zIndex: -1,

  },
  intro: {
    color: '#8D8741',
  },
  text: {

  }
}));

function App() {
  const classes = useStyles();

  return (
    <div id="top" style={{ backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className="App">
      <Header />
      <div style={{ paddingTop: 64 }}>
        <Grid container className={classes.image} direction="row" spacing={0} alignItems="center">
          <Grid item lg={2} md={4} sm={6} xs={10}>
            <Avatar variant="circle" alt="Jacob O'Reilly" src={require('./img/avatar.jpg')} className={classes.avatar}></Avatar>
          </Grid>
          <Grid item className={classes.text} lg={3} md={6} sm={9} xs={10}>
            <Typography className={classes.intro} variant="h6">Software Engineer</Typography>
            <Typography className={classes.intro} variant="h6">Fargo, ND</Typography>
          </Grid>
        </Grid>
        <div style={{ marginTop: "10%" }} class="container">
          <div class="row align-items-start justify-content-md-center">
            <div class="col-6">
              <About />
            </div>
          </div>
          <div style={{ marginTop: "40%" }} class="row align-items-center justify-content-md-center">
            <div style={{}} class="col-6">
              <Projects />
            </div>
          </div>
          <div style={{ marginTop: "40%" }} class="row align-items-end justify-content-md-center">
            <div class="col">
              <Contact />
            </div>
          </div>
        </div>
        <div style={{ marginTop: "40%" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
