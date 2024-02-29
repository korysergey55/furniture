import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom';

import { observer } from 'mobx-react'
import { useStore } from '../../storeMobx';

import { pathes } from '../../utiles/pathes/pathes'

import Header from '../header/Header';
import Headroom from 'react-headroom';
import Footer from '../footer/Footer';
import MobileModalMenu from '../MobileModalMenu/MobileModalMenu';
import Loader from '../loader/Loader';

const HomePage = lazy(() => import('../pages/homePage/HomePage'))
const AboutUs = lazy(() => import('../pages/aboutUsPage/AboutUsPage'))
const ServicesPage = lazy(() => import('../pages/ServicesPage/ServicesPage'))
const ProcessPage = lazy(() => import('../pages/processPage/ProcessPage'))
const PortfolioPage = lazy(() => import('../pages/portfolioPage/PortfolioPage'))
const ContactPage = lazy(() => import('../pages/contactPage/ContactPage'))
const ProductDetails = lazy(() => import('../pages/ProductDetails/ProductDetails'))
const NotFoundPage = lazy(() => import('../pages/notFoundPage/NotFoundPage'))

const App = observer(() => {
  const { MobileModalStore } = useStore()
  const { modal } = MobileModalStore
  return (
    <div>
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
          <Route exact={false} path={`${pathes.portfolio}/:productDetailsName`} element={<ProductDetails />} ></Route>
          <Route exact={false} path='*' element={<NotFoundPage />} ></Route>
        </Routes>
      </Suspense>
      <Footer />
      {modal ? <MobileModalMenu /> : null}
    </div>
  );
})

export default App;