import React from 'react';
import {images} from '../../constants'
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new Flavour"/>
      <h1 className='app__header-h1' >The Key to Fine Dining</h1>
      <p className='p__opensans' style={{margin:'2rem 0'}}>Indulge in a symphony of flavors at our fine dining establishment, where culinary artistry meets impeccable service. Each dish is a masterpiece, meticulously crafted to tantalize your senses and create unforgettable dining experiences.</p>
    <button type='button' className='custom__button'>Explore Menu</button>
    </div>

  
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header" />
    </div>
  </div>
  
);

export default Header;
