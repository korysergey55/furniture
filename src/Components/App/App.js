import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import history from '../../utiles/history/history'

import Header from '../header/Header';
import AboutUs from '../pages/about us/AboutUs';
import ContactsPage from '../pages/contacts/ContactsPage';
import HomePage from '../pages/home/HomePage'
import NotFoundPage from '../pages/notFound/NotFoundPage';
import Footer from '../footer/Footer';

const App = () => {
  return (
    <BrowserRouter history={history}>
      <Header></Header>
      <Suspense fallback='Loading...'>
        <Routes>
          <Route exact={true} path='/' element={<HomePage />} ></Route>
          <Route exact={true} path='/about' element={<AboutUs />} ></Route>
          <Route exact={true} path='/contacts' element={<ContactsPage />} ></Route>
          <Route exact={true} path='/:notFound' element={<NotFoundPage />} ></Route>

        </Routes>
      </Suspense>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;