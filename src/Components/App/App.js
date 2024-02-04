import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import history from '../../utiles/history/history'
import { pathes } from '../../utiles/pathes/pathes'

import Header from '../header/Header';
import HomePage from '../pages/homePage/HomePage'
import AboutUs from '../pages/aboutUsPage/AboutUsPage';
import ServicesPage from '../pages/ServicesPage/ServicesPage';
import ProcessPage from '../pages/processPage/ProcessPage';
import PortfolioPage from '../pages/portfolioPage/PortfolioPage';
import ContactPage from '../pages/contactPage/ContactPage';
import NotFoundPage from '../pages/notFoundPage/NotFoundPage';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import Footer from '../footer/Footer';



const App = () => {
  return (
    <BrowserRouter history={history}>
      <Header></Header>
      <Suspense fallback='Loading...'>
        <Routes>
          <Route exact={true} path={pathes.home} element={<HomePage />} ></Route>
          <Route exact={true} path={pathes.about} element={<AboutUs />} ></Route>
          <Route exact={true} path={pathes.services} element={<ServicesPage />} ></Route>
          <Route exact={true} path={pathes.process} element={<ProcessPage />} ></Route>
          <Route exact={true} path={pathes.portfolio} element={<PortfolioPage />} ></Route>
          <Route exact={true} path={pathes.contact} element={<ContactPage />} ></Route>
          <Route exact={false} path='/portfolio/:productDetails' element={<ProductDetails />} ></Route>
          <Route exact={false} path='/:notFound' element={<NotFoundPage />} ></Route>

        </Routes>
      </Suspense>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;