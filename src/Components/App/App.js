import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { observer } from 'mobx-react'
import { useStore } from '../../storeMobx';

import history from '../../utiles/history/history'
import { pathes } from '../../utiles/pathes/pathes'

import Header from '../header/Header';
import Headroom from 'react-headroom';

import HomePage from '../pages/homePage/HomePage'
import AboutUs from '../pages/aboutUsPage/AboutUsPage';
import ServicesPage from '../pages/ServicesPage/ServicesPage';
import ProcessPage from '../pages/processPage/ProcessPage';
import PortfolioPage from '../pages/portfolioPage/PortfolioPage';
import ContactPage from '../pages/contactPage/ContactPage';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import NotFoundPage from '../pages/notFoundPage/NotFoundPage';
import Footer from '../footer/Footer';
import MobileModalMenu from '../MobileModalMenu/MobileModalMenu';
import Loader from '../loader/Loader';


const App = observer(() => {
  const { MobileModalStore } = useStore()
  const { modal } = MobileModalStore
  return (
    <BrowserRouter history={history}>
      <Headroom>
        <Header />
      </Headroom>
      <Suspense fallback={<Loader />}>
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
      {/* <Loader /> */}
      <Footer></Footer>
      {modal ? <MobileModalMenu /> : null}
    </BrowserRouter>
  );
})

export default App;