import React from 'react';
import AppBar from '@material-ui/core/AppBar';

function Header() {
  return (
    <div className="Header">
      <AppBar color="primary" position="static">
        <h1>Jacob O'Reilly</h1>
      </AppBar>
    </div>
  );
}

export default Header;
