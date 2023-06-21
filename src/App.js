import React from 'react';

import { AboutUs, FindUs, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    
  </div>
);

export default App;
