import React from 'react';
import { AppBar, Button, Toolbar, makeStyles, ThemeProvider } from '@material-ui/core/';
import { Link } from 'react-scroll';



const useStyles = makeStyles(theme => ({
  header: {
    zIndex: 9999,
    transition: 'transform 0.5s',
    position: 'fixed',
    top: 0,
    width: '100%',
    
    
  },
  buttons: {
    marginLeft: '60%',
  },
  buttonStyle: {
    color: '#8D8741',
  },
  title: {
    color: '#8D8741',
  },
  appBar: {
    backgroundColor: '#FBEEC1',
  }
}))

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Link activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}>
                <h1 className={classes.title}>Jacob O'Reilly</h1>
          </Link>
          <div className={classes.buttons}>
            <Link activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-75}
                  duration={500}>
                  <Button className={classes.buttonStyle}>About</Button>
            </Link>
            <Link activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-75}
                  duration={500}>
                  <Button className={classes.buttonStyle}>Projects</Button>
            </Link> 
            <Link activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-75}
                  duration={500}>
                  <Button className={classes.buttonStyle}>Contact</Button>
            </Link> 
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
