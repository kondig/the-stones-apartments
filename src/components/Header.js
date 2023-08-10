import React from 'react';
import sketch from '../images/ats-sketch.png';
import logo from '../images/ats-logo.png';
import Tooltip from '@material-ui/core/Tooltip';


function Header() {
    return (
        <header className="App-header">
          <div className="row">
            {/*<p className="heading">Apartments <br/> The Stones</p>*/}
            <img src={logo} className="ats-sketch" alt="logo" />
          </div>
          <div className="socialmedia sm-header">
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
