import React from 'react';

import Header from './components/header';

import Footer from './components/footer';

import Weather from './components/weather';

import Finder from './components/finder';

import './App.css';


function App(){

  return (
    <div>
      <Header />

      <Finder />

      <Weather />
      
      <Footer />
    </div>
  )
}

export default App;