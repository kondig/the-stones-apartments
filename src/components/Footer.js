import React from 'react';
// import pts from '../images/pts-logo.png';
// import Link from '@mui/material/Link';
import SocialMediaNode from './smNode.js';
import LogoNode from './logoNode.js';


function Footer() {
    return (
        <div className="App-footer">
            <h2 className="subheading">Contact</h2>
            <SocialMediaNode />
            <div className="pts-container">
                <div className="addresses">
                  Old Market Str, Chora Naxos, 84300
                  <br/>
                  Stelida, Agios Prokopios, 84300
                </div>
                <LogoNode />
                {/*<Link href="https://projectsthestones.com/" target="_blank" rel="noreferrer">
                  <img src={pts} className="pts-logo" alt="Projects: The Stones" />
                </Link>*/}               
            </div>
        </div>
    )
}

export {Footer};
