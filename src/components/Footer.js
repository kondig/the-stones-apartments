import React from 'react';
import pts from '../images/pts-logo.png';
import Tooltip from '@mui/material/Tooltip';

function Footer() {
    return (
        <div className="App-footer">
            <h2 className="subheading">Contact</h2>
            <div className="socialmedia">
                <div className="sm-item">
                    <a href="https://www.facebook.com/apartmentsthestones" target="_blank" rel="noopener noreferrer" className="link" >
                      <Tooltip title='facebook' placement="bottom">
                        <i className='fa fa-facebook faicon fawhite'  />
                      </Tooltip>
                    </a>
                </div>
                <div className="sm-item">
                    <a href="https://www.instagram.com/apartmentsthestones/" target="_blank" rel="noopener noreferrer" className="link" >
                      <Tooltip title='instagram' placement="bottom">
                        <i className='fa fa-instagram faicon fawhite' />
                      </Tooltip>
                    </a>
                </div>
                <div className="sm-item">
                    <a href="mailto:giampourask@gmail.com" target="_blank" rel="noopener noreferrer" className="link" >
                      <Tooltip title='email: giampourask@gmail.com' placement="bottom">
                        <i className='fa fa-paper-plane faicon fawhite' />
                      </Tooltip>
                    </a>
                </div>
                <div className="sm-item">
                    <a href="tel:00306944720770" target="_blank" rel="noopener noreferrer" className="link" >
                      <Tooltip title='+30 69 44 72 07 70' placement="bottom">
                        <i className='fa fa-phone faicon fawhite' />
                      </Tooltip>
                    </a>
                </div>
            </div>
            <div className="pts-container">
                <div className="name-address">
                    Konstantinos Giampouras <br/>
                    Chemical Engineer N.T.U.A. <br/>
                    Old Market Str, Chora Naxos, 84300, Greece
                </div>
                <img src={pts} className="pts-logo" alt="Projects: The Stones" />
            </div>
        </div>
    )
}

export {Footer};
