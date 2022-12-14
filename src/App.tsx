import React from 'react';
import { Grid } from '@material-ui/core';

import Home from './paginas/home/Home'
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
