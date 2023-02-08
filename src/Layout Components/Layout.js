import React from 'react';
import SiteMenu from '/Users/Jacob/code/Katelyn/katelyn-hairstylist/src/Layout Components/SiteMenu.js';
import backgroundImage from '/Users/Jacob/code/Katelyn/katelyn-hairstylist/src/Home Page Components/293580694_451200187013290_6529234800391070173_n.jpeg';

const Layout = ({ children }) => (
    <div className="fade-in-master">
  <div style={{
    backgroundImage: `url(${backgroundImage})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: '100vh'
  }}>  
    <SiteMenu />
    {children}
  </div></div>

);

export default Layout;
