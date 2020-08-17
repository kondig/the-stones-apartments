import React from 'react';
// import reactlogo from '../logo.svg';
import logo from '../images/ats-logo.png'
import sketch from '../images/ats-sketch.jpg'

function Header() {
    return (
        <header className="App-header">
          <div className="row">
            <img src={sketch} className="ats-sketch" alt="logo" />
          </div>
          <img src={logo} className="" alt="logo" />


        </header>
    )
}

export {Header}

// <img src={sketch} className="App-logo" alt="logo" />    
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Check Us here
// </a>
