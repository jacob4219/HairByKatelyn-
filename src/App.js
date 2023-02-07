import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '/Users/Jacob/code/Katelyn/katelyn-hairstylist/src/Site Pages/HomePage.js';
import ContactPage from '/Users/Jacob/code/Katelyn/katelyn-hairstylist/src/Site Pages/ContactPage.js';
import BookPage from '/Users/Jacob/code/Katelyn/katelyn-hairstylist/src/Site Pages/BookPage.js';
import Layout from '/Users/Jacob/code/Katelyn/katelyn-hairstylist/src/Layout Components/Layout.js';
import CancellationPolicy from '/Users/Jacob/code/Katelyn/katelyn-hairstylist/src/Site Pages/CancellationPolicy.js';
import PortfolioPage from '/Users/Jacob/code/Katelyn/katelyn-hairstylist/src/Site Pages/PortfolioPage.js';
import PromotionsPage from '/Users/Jacob/code/Katelyn/katelyn-hairstylist/src/Site Pages/PromotionsPage.js';
import ServicesPage from '/Users/Jacob/code/Katelyn/katelyn-hairstylist/src/Site Pages/ServicesPage.js';
import StorePage from '/Users/Jacob/code/Katelyn/katelyn-hairstylist/src/Site Pages/StorePage.js';
// import from '';
// import from '';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <div className="container">
          <Routes>
            <Route path="/" element={ <HomePage/> } />
            <Route path="/contact" element={ <ContactPage/> } />
            <Route path="/book" element={ <BookPage/> } />
            <Route path="/cancellation" element={ <CancellationPolicy/> } />
            <Route path="/portfolio" element={ <PortfolioPage/> } />
            <Route path="/promotions" element={ <PromotionsPage/> } />
            <Route path="/services" element={ <ServicesPage/> } />
            <Route path="/store" element={ <StorePage/> } />
          </Routes>
        </div> 
      </Layout> 
    </BrowserRouter>
  );
  
  // return (
  //   <BrowserRouter>
  //     <Layout>
  //       <Routes>
  //         <Route path="/" element={ <HomePage/> } />
  //         <Route path="/contact" element={ <ContactPage/> } />
  //         <Route path="/book" element={ <BookPage/> } />
  //         <Route path="/cancellation" element={ <CancellationPolicy/> } />
  //         <Route path="/portfolio" element={ <PortfolioPage/> } />
  //         <Route path="/promotions" element={ <PromotionsPage/> } />
  //         <Route path="/services" element={ <ServicesPage/> } />
  //         <Route path="/store" element={ <StorePage/> } />
  //       </Routes>
  //     </Layout> 
  //   </BrowserRouter>
  // );
}

export default App;


