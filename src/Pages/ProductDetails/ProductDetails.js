import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../storeMobx';
import { toJS } from 'mobx';

import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { ref, getDownloadURL, listAll } from 'firebase/storage';
import { storage } from '../../Firabase/firabase';

import BookConsultation from '../../Components/bookConsultation/BookConsultation';
import styles from './styles.module.scss';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Video from 'yet-another-react-lightbox/plugins/video';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

const ProductDetails = observer(() => {
  const { productDetailsName } = useParams();
  const { PartfolioStore } = useStore();
  const navigate = useNavigate();

  const [product, setProduct] = useState({});
  const [index, setIndex] = useState(-1);
  const [storageImages, setStorageImages] = useState([]);

  const getFirestoreImages = async () => {
    const listRef = ref(storage, `gs://vitaly-furniture.appspot.com/${productDetailsName}`);
    listAll(listRef)
      .then(res => {
        res.prefixes.forEach(folderRef => {
          // All the prefixes under listRef.
          // You may call listAll() recursively on them.
        });
        res.items.forEach(itemRef => {
          // All the items under listRef.
          getDownloadURL(ref(storage, itemRef._location.path_))
            .then(url => {
              setStorageImages(prev => [...prev, { src: url }]);
            })
            .catch(error => {
              throw new Error(error);
            });
        });
      })
      .catch(error => {
        throw new Error(error);
      });
  };

  useEffect(() => {
    if (productDetailsName) {
      setProduct(toJS(PartfolioStore.getProduct(productDetailsName)));
    }
  }, [productDetailsName]);

  useEffect(() => {
    if (productDetailsName) {
      getFirestoreImages();
    }
  }, []);

  return (
    <div className={styles.product_details}>
      <div className={styles.container}>
        <h2 className={styles.product_path} onClick={() => navigate('/portfolio')}>
          Portfolio-{product.path}
        </h2>
        <div className={styles.title_vripper}>
          <h2 className={styles.title}>{product?.productName}</h2>
          <p className={styles.discription}>{product?.title}</p>
        </div>
        <ul className={styles.images_list}>
          {storageImages.length > 0 &&
            storageImages.map((item, index) => (
              <li className={styles.image_item} key={uuidv4()} onClick={() => setIndex(index)}>
                <img className={styles.image} src={item.src} alt={product.productName + 'image'} />
              </li>
            ))}
        </ul>
        {storageImages.length > 0 && <BookConsultation />}
      </div>

      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={[...storageImages]}
        plugins={[Captions, Fullscreen, Slideshow, Video, Zoom]}
      />
    </div>
  );
});

export default ProductDetails;
