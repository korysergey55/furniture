import React from 'react'
import styles from './styles.module.scss'

import { useState } from "react";
import { storage } from '../../Firabase/firabase';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const AboutUs = () => {
  const [state, setState] = useState([])

  // const storage = getStorage();
  // const gsReference = ref(storage, 'gs://vitaly-furniture.appspot.com/bespoke');


  const storage = getStorage();
  getDownloadURL(ref(storage, 'bespoke/bespoke-image-1.jpg'))
    .then((url) => {
      // `url` is the download URL for 'images/stars.jpg'

      // This can be downloaded directly:
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = (event) => {
        const blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();

      // Or inserted into an <img> element
      const img = document.getElementById('myimg');
      img.setAttribute('src', url);
    })
    .catch((error) => {
      // Handle any errors
    });


  return (
    <div className={styles.about_us}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Us</h2>
        <p className={styles.discription}>
          NARS furniture is a small family business that was founded in 2017. Our commitment to innovation in
          production is the key to the best quality product. We are passionate about making furniture.
          We have implemented many projects developed in collaboration with our in-house designers and
          architects in the private and commercial sector.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;