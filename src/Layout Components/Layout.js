import React from 'react';
import SiteMenu from '/Users/Jacob/code/Katelyn/katelyn-hairstylist/src/Layout Components/SiteMenu.js';
import backgroundImage from '/Users/Jacob/code/Katelyn/katelyn-hairstylist/src/Photos/293580694_451200187013290_6529234800391070173_n.jpeg';

const Layout = ({ children }) => (
  <div style={{
    backgroundImage: `url(${backgroundImage})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
  }}>  
    <SiteMenu />
    <div style={{
      width: '100%',
      height: '100%',
      position: 'relative',
      margin: '0 auto',
    }}>
      {children}
    </div>
  </div>
);


export default Layout;
