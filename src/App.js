import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Main} from './components/Main';
import {Footer} from './components/Footer';

import { ThemeProvider, createTheme, } from '@mui/material/styles';
import { green } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2346A0',
      dark: '#155475'
    },
    secondary: {
      main: '#7ab340',
      dark: green[900]
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
