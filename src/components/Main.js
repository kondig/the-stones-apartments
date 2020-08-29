import React from 'react';
import emery from '../images/emerystone-logo.png';
import lime from '../images/limestone-logo.png';
import Tooltip from '@material-ui/core/Tooltip';
import {Apartment} from './stone.js'

function Main() {
    return (
        <div className="App-main">
            <p className="text">
                Apartments The Stones is a hospitality service.
                The contribution in creating unforgettable memories in your vacation time.
                <br/><br/>
                We offer a nice place to stay and tailor made recommendations regarding food & drinks, activities and sightseeing in order to complete your Naxos experience.
            </p>
            <div className="apartments">
                <div className="ap-item">
                    <Apartment title='Emery Stone' subheader='Stelida, Naxos' imgfile={emery} imgtitle='Emery Stone' link='https://www.airbnb.com/rooms/2843216?guests=1&adults=1' />
                </div>
                <div className="ap-item">
                    <Apartment title='Limestone' subheader='Chora, Naxos' imgfile={lime} imgtitle='Limestone' link='https://www.airbnb.com/rooms/23591413?guests=1&adults=1' />
                </div>
            </div>
        </div>
    )
}

export {Main};
