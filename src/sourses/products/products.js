import { bespokeImagesArr } from '../images/products/bespoke/bespokeImagesArr'
import { cabinetsImagesArr } from '../images/products/cabinets/cabinetsImagesArr'
import { kitchenImagesArr } from '../images/products/kitchen/kitchenImagesArr'
import { wardbordsImagesArr } from '../images/products/wardrobes/wardbordsImagesArr'

const productsArr = [
  {
    productName: 'Cabinets',
    title: 'Bespoke fitted cabinets',
    discription: 'Home office, Boot rooms, kitchens and more.We can make storage for any space in your home.',
    path: 'cabinets',
    image: cabinetsImagesArr[0],
    images: [...cabinetsImagesArr]
  },
  {
    productName: 'Kitchen',
    title: 'Custom made kitchens',
    discription: 'Fitted Kitchen to fully utilise those awkward spaces.',
    path: 'kitchen',
    image: kitchenImagesArr[0],
    images: [...kitchenImagesArr]
  },
  {
    productName: 'Wardrobes',
    title: 'Individual storage solution',
    discription: 'Fitted Wardrobes made to fit the space available.',
    path: 'wardrobes',
    image: wardbordsImagesArr[0],
    images: [...wardbordsImagesArr]
  },

  {
    productName: 'Bespoke furniture',
    title: 'Other projects',
    discription: 'Home office, Boot rooms, kitchens and more.We can make storage for any space in your home.',
    path: 'bespoke',
    image: bespokeImagesArr[0],
    images: [...bespokeImagesArr]
  },

]

export { productsArr }