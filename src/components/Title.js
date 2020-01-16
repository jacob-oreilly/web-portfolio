import React from 'react';
import CropBike from '../img/cropbike.JPG';
import bike from '../img/bike.JPG';
import { makeStyles, Avatar, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        marginLeft: theme.spacing(10),
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
                direction: "row",
                zIndex: -1,
            }} className="container">
                <div className="row align-items-start justify-content-md-center">
                    <div className="col-sm-12 col-lg-3 align-self-center">
                        <Avatar variant="circle" alt="Jacob O'Reilly" src={require('../img/avatar.jpg')} className={classes.avatar}></Avatar>
                    </div>

                </div>
                <div style={{marginLeft: "2%"}} className="row align-items-start justify-content-md-center">
                    <div className="col-sm-12 col-lg-4 align-self-center">
                        <Typography className={classes.intro} variant="h6">Software Engineer</Typography>
                        <Typography className={classes.intro} variant="h6">Fargo, ND</Typography>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Title;
