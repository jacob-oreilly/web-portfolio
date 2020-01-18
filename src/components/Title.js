import React from 'react';
import CropBike from '../img/cropbike.JPG';
import bike from '../img/bike.JPG';
import { makeStyles, Avatar, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
    intro: {
        color: '#8D8741',
    },
}));


function Title() {
    const classes = useStyles();
    return (
        <div style={{ width: "100%" }}>
            <div style={{
                background: "url(" + bike + ")", backgroundColor: 'rgba(95,158,160, .2)',
                padding: 35,
                width: '100%',
                maxWidth: '100%',
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                zIndex: -1,
            }} className="container">
                <div>
                    <div>
                        <Avatar variant="circle" alt="Jacob O'Reilly" src={require('../img/avatar.jpg')} className={classes.avatar}></Avatar>
                    </div>
                </div>
                <div>
                    <div>
                        <Typography className={classes.intro} variant="h6">Software Engineer</Typography>
                        <Typography className={classes.intro} variant="h6">Fargo, ND</Typography>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Title;
