import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from './firabase';

const getStorageImage = async (path = 'bespoke/bespoke-image-1.jpg') => {
  const res = await getDownloadURL(ref(storage, path))
    .then(url => {
      // `url` is the download URL for 'images/stars.jpg'
      // This can be downloaded directly:
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = event => {
        const blob = xhr.response;
      };
      // xhr.open('GET', url);
      // xhr.send();
      return url;

      // Or inserted into an <img> element
      // const img = document.getElementById('myimg');
      // img.setAttribute('src', url);
    })
    .catch(error => {
      console.log(error);
    });

  return res;
};

export default getStorageImage;
