import React from 'react'
import styles from './styles.module.scss'

import { observer } from 'mobx-react';
import { useNavigate } from 'react-router';
import { pathes } from '../../utiles/pathes/pathes'

import ProductList from '../../Components/ProductList/ProductList';

const HomePage = observer(() => {
  const navigate = useNavigate()
  return (
    <div className={styles.home_page}>
      <div className={styles.container}>
        <div className={styles.hero}></div>
        <div className={styles.wripper}>
          <h2 className={styles.title}> Bespoke Fitted Furniture</h2>
          <p className={styles.discription}>
            Vitaly furniture is a small family business that was founded in 2017. Our commitment to innovation in
            production is the key to the best quality product. We have implemented many projects developed in collaboration with our in-house designers and architects.
            <br />
            We are a bespoke furniture & joinery company, that prides ourselves on providing only the very best quality products and service to our clients. From design to installation we take care of everything ensuring impeccable quality for both product and service. Services Provided 3D design and interior design Free standing and fitted furniture. First, second and final fix joinery.
            <br />

            Areas Served Cheshire, Manchester mainly but also nationwide in the private and commercial sector.
          </p>
          <button
            type='button'
            className={styles.button}
            onClick={() => navigate(`${pathes.contact}`)}
          >Contact
          </button>
        </div>
        <ProductList />
      </div>
    </div>
  );
})

export default HomePage;