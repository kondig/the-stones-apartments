import React from 'react';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import pts from '../images/pts-logo.png';


export default function LogoNode() {
    return (
        <div className="logo-container">
            <Link href="https://projectsthestones.com/" target="_blank" rel="noreferrer" underline="none" color="#000">
                <Tooltip title='Visit for more' placement="bottom" >
                    <img src={pts} className="container__image" alt="Projects: The Stones" />
                </Tooltip>
            </Link>
        </div>
    )
}


