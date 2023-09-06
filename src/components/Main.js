import React from 'react';
import emery from '../images/emerystone-logo.png';
import lime from '../images/limestone-logo.png';
import {Apartment} from './stone.js'
import TextContainer from './txtcontainer.js';

import Box from '@mui/material/Box';


function Main() {
    return (
        <Box className="App-main" sx={{ position: 'relative' }}>
            <div className="layer"></div>
            <TextContainer />
            <div className="apartments">
                <div className="ap-item">
                    <Apartment title='Emerystone' subheader='Stelida, Naxos' imgfile={emery} imgtitle='Emery Stone' link='https://www.airbnb.com/rooms/2843216?guests=1&adults=1' />
                </div>
                <div className="ap-item">
                    <Apartment title='Limestone' subheader='Chora, Naxos' imgfile={lime} imgtitle='Limestone' link='https://www.airbnb.com/rooms/23591413?guests=1&adults=1' />
                </div>
            </div>
        </Box>
    )
}

export {Main};
