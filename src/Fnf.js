import * as React from 'react';
import { Typography } from '@mui/material';
import {Link} from 'react-router-dom';
import catjam from './assets/CatJam.gif'


export default function fnf() {
    return (
        <>
            <Typography variant="h1" component="h1">Oh no!</Typography>
            <Typography variant="h3" component="h3">This link doesn't exist</Typography>
            <div style={{width:"100%", height:"320px", transform:"translate(40px, 0)"}}>              
              <img style={{position:"relative", maxWidth: "320px", maxHeight: "320px", display:"inline"}} alt="" src={catjam}/>
              <img style={{display:"inline", maxWidth: "80px", maxHeight: "80px", position: "relative", bottom: 0, right: 0, transform:"translate(-100%, 0)"}} alt="" src={catjam}/>
            </div>
            <br/>
            <Link to="/">Return home</Link>
        </>
    );
};
