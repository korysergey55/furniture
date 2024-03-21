import { cabinetsImagesArr } from '../images/products/cabinets/cabinetsImagesArr';
import { bespokeImagesArr } from '../images/products/bespoke/bespokeImagesArr';
import { kitchenImagesArr } from '../images/products/kitchen/kitchenImagesArr';
import { wardbordsImagesArr } from '../images/products/wardrobes/wardbordsImagesArr';

import cabinetsImage from '../../sourses/images/products/cabinets/cabinets-image-1.jpg';
import cabinetsImage_2x from '../../sourses/images/products/cabinets/cabinets-image-1@2x.webp';

import kitchenImage from '../../sourses/images/products/kitchen/kitchen-image-1.jpg';
import kitchenImage_2x from '../../sourses/images/products/kitchen/kitchen-image-1@2x.webp';

import wardrobesImage from '../../sourses/images/products/wardrobes/wardrobes-image-1.jpg';
import wardrobesImage_2x from '../../sourses/images/products/wardrobes/wardrobes-image-1@2x.webp';

import bespokeImage from '../../sourses/images/products/bespoke/bespoke-image-1.jpg';
import bespokeImage_2x from '../../sourses/images/products/bespoke/bespoke-image-1@2x.webp';

const productsArr = [
  {
    productName: 'Cabinets',
    title: 'Bespoke fitted cabinets',
    discription: 'Home office, Boot rooms, kitchens and more.We can make storage for any space in your home.',
    path: 'cabinets',
    image: { src: cabinetsImage, srcset: cabinetsImage_2x },
    // images: [...cabinetsImagesArr],
  },
  {
    productName: 'Kitchen',
    title: 'Custom made kitchens',
    discription: 'Fitted Kitchen to fully utilise those awkward spaces.',
    path: 'kitchen',
    image: { src: kitchenImage, srcset: kitchenImage_2x },
    // images: [...kitchenImagesArr],
  },
  {
    productName: 'Wardrobes',
    title: 'Individual storage solution',
    discription: 'Fitted Wardrobes made to fit the space available.',
    path: 'wardrobes',
    image: { src: wardrobesImage, srcset: wardrobesImage_2x },
    // images: [...wardbordsImagesArr],
  },

  {
    productName: 'Bespoke furniture',
    title: 'Other projects',
    discription: 'Home office, Boot rooms, kitchens and more.We can make storage for any space in your home.',
    path: 'bespoke',
    image: { src: bespokeImage, srcset: bespokeImage_2x },
    // images: [...bespokeImagesArr],
  },
];

export { productsArr };
