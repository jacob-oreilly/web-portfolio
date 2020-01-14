import React from 'react';
import { AppBar, Button, Toolbar, makeStyles, ThemeProvider } from '@material-ui/core/';



const useStyles = makeStyles(theme => ({
  header: {
    transition: 'transform 0.5s',
    
    
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
}))

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <AppBar color="default" position="static" style={{background: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
          <h1 className={classes.title}>Jacob O'Reilly</h1>
          <div className={classes.buttons}>
            <Button className={classes.buttonStyle}>About</Button>
            <Button className={classes.buttonStyle}>Projects</Button>
            <Button className={classes.buttonStyle}>Contact</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
