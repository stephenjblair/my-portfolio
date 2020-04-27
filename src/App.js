import React from 'react';
import Home from  './components/';
import CssBaseline from '@material-ui/core/CssBaseline';
import BackgroundVideo from './components/BackgroundVideo';
import './App.css';

function App() {
  return (
    <>
    <CssBaseline />
      <Home />
      <BackgroundVideo />
    </>
  );
}

export default App;
