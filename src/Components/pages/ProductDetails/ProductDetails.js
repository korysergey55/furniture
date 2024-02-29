import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { observer } from 'mobx-react';
import { useStore } from '../../../storeMobx';
import { toJS } from 'mobx';
import styles from './styles.module.scss'
import { v4 as uuidv4 } from 'uuid';

import Lightbox from "yet-another-react-lightbox";

const ProductDetails = observer(() => {
  const { productDetailsName } = useParams()
  const { PartfolioStore } = useStore()
  const [product, setProduct] = useState({})

  const [open, setOpen] = useState(false);
  const [imagesG, setImagesG] = useState([]);

  useEffect(() => {
    if (productDetailsName) {
      setProduct(toJS(PartfolioStore.getProduct(productDetailsName)))
    }
  }, [productDetailsName])

  useEffect(() => {
    if (product && product.images) {
      setImagesG(product?.images?.map((item) => ({ src: item })))
    }
  }, [product])


  return (
    <div className={styles.productDetails}>
      <div className={styles.comtainer}>
        <h2 className={styles.title}>{product.productName}</h2>
        <p className={styles.discription}>{product.discription}</p>
        <ul className={styles.imageList}>
          {product && product.images && product.images.map((item) => (
            <li
              className={styles.imageItem}
              onClick={() => setOpen(true)}
              key={uuidv4()}
            >
              <img
                className={styles.image}
                src={item}
                alt={product.productName + 'image' || 'image'}
              />
            </li>
          ))}
        </ul>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[...imagesG]}
      />
    </div>
  );
})

export default ProductDetails;