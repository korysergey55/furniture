import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import history from '../../utiles/history/history'

import Header from '../header/Header';
import HomePage from '../pages/homePage/HomePage'
import ProductsPage from '../pages/productsPage/ProductsPage';
import AboutUs from '../pages/aboutUsPage/AboutUsPage';
import ContactsPage from '../pages/contactsPage/ContactsPage';
import NotFoundPage from '../pages/notFoundPage/NotFoundPage';
import Footer from '../footer/Footer';
import ProductDetails from '../pages/ProductDetails/ProductDetails';


const App = () => {
  return (
    <BrowserRouter history={history}>
      <Header></Header>
      <Suspense fallback='Loading...'>
        <Routes>
          <Route exact={true} path='/' element={<HomePage />} ></Route>
          <Route exact={true} path='/products' element={<ProductsPage />} ></Route>
          <Route exact={true} path='/about' element={<AboutUs />} ></Route>
          <Route exact={true} path='/contacts' element={<ContactsPage />} ></Route>
          <Route exact={false} path='/products/:productDetails' element={<ProductDetails />} ></Route>
          <Route exact={false} path='/:notFound' element={<NotFoundPage />} ></Route>

        </Routes>
      </Suspense>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;