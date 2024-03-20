import React, { useEffect } from 'react'
import styles from './styles.module.scss'

import { useState } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from '../../Firabase/firabase';

const AboutUs = () => {
  const [imgUrl, setImgUrl] = useState([])

  useEffect(() => {
    console.log(imgUrl)
  }, [imgUrl])

  const gsReference = ref(storage, 'gs://vitaly-furniture.appspot.com/bespoke');
  // 'gs://vitaly-furniture.appspot.com/cabinets'
  // 'gs://vitaly-furniture.appspot.com/kitchen'
  // 'gs://vitaly-furniture.appspot.com/wardrobes'

  const handleSubmit = () => {

    getDownloadURL(ref(storage, 'bespoke/bespoke-image-2.jpg'))
      .then((url) => {
        // `url` is the download URL for 'images/stars.jpg'
        // This can be downloaded directly:
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = (event) => {
          const blob = xhr.response;
        };
        // xhr.open('GET', url);
        // xhr.send();
        console.log(url)
        setImgUrl((prev) => [...prev, url])

        // Or inserted into an <img> element
        const img = document.getElementById('myimg');
        img.setAttribute('src', url);
      })
      .catch((error) => {
        console.log(error)
      });
  }

  return (
    <div className={styles.about_us}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Us</h2>
        <p className={styles.discription}>
          Vitaly furniture is a small family business that was founded in 2017. Our commitment to innovation in
          production is the key to the best quality product. We have implemented many projects developed in collaboration with our in-house designers and architects. We are a bespoke furniture & joinery company, that prides ourselves on providing only the very best quality products and service to our clients. From design to installation we take care of everything ensuring impeccable quality for both product and service. Services Provided 3D design and interior design Free standing and fitted furniture. First, second and final fix joinery.
          <br />
          Areas Served
          Cheshire, Manchester mainly but also nationwide in the private and commercial sector.
        </p>

        {imgUrl && imgUrl.map((item) => (
          <img src={item} />
        ))}

        <button
          type='submit'
          onClick={handleSubmit}
        >GetImages</button>
      </div>
    </div>
  );
}

export default AboutUs;