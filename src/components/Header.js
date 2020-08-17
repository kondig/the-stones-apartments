import React from 'react';
// import reactlogo from '../logo.svg';
import logo from '../images/ats-logo.png';
import sketch from '../images/ats-sketch.jpg';
import Tooltip from '@material-ui/core/Tooltip';


function Header() {
    return (
        <header className="App-header">
          <div className="row">
            <img src={sketch} className="ats-sketch" alt="logo" />
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <div className="socialmedia">
              <a href="https://www.facebook.com/apartmentsthestones" target="_blank" rel="noopener noreferrer" className="link" >
                <Tooltip title='facebook' placement="bottom">
                  <i className='fa fa-facebook faicon'  />
                </Tooltip>
              </a>
              <a href="https://www.instagram.com/apartmentsthestones/" target="_blank" rel="noopener noreferrer" className="link" >
                <Tooltip title='instagram' placement="bottom">
                  <i className='fa fa-instagram faicon' />
                </Tooltip>
              </a>
          </div>
        </header>
    )
}

export {Header}
