import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'

import { observer } from 'mobx-react';
import { useStore } from '../../storeMobx';
import { toJS } from 'mobx';

import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const ProductDetails = observer(() => {
  const { productDetailsName } = useParams()
  const { PartfolioStore } = useStore()
  const [product, setProduct] = useState({})

  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    if (productDetailsName) {
      setProduct(toJS(PartfolioStore.getProduct(productDetailsName)))
    }
  }, [productDetailsName])

  useEffect(() => {
    if (product && product.images) {
      setImages(product?.images?.map((item) => ({ src: item.src })))
    }

  }, [product])

  return (
    <div className={styles.product_details}>
      <div className={styles.container}>
        <h2 className={styles.title}>{product?.productName}</h2>
        <p className={styles.discription}>{product?.title}</p>
        <ul className={styles.images_list}>
          {product && product.images && product.images.map((item, index) => (
            <li
              className={styles.image_item}
              key={uuidv4()}
              onClick={() => setIndex(index)}
            >
              <img
                className={styles.image}
                srcSet={`${item.srcset} 2x`}
                src={item.src}
                alt={product.productName + 'image'}
              />
            </li>
          ))}
        </ul>
      </div>

      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={[...images]}
        plugins={[Captions, Fullscreen, Slideshow, Video, Zoom]}
      />
    </div>
  );
})

export default ProductDetails;