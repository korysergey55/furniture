import Image from '../../sourses/images/hero/desktop/hero-dasktop-1.jpg'
import Image1 from '../images/products/image-1.jpg'
import Image2 from '../images/products/image-2.jpg'
import Image3 from '../images/products/image-3.jpg'
import Image4 from '../images/products/image-4.jpg'

const productsArr = [
  {
    src: Image1,
    path: 'wardrobes',
    productName: 'Wardrobes',
    discription: 'Fitted Wardrobes made to fit the space available.',
    images: [Image1, Image1, Image1, Image1, Image1]
  },
  {
    src: Image2,
    path: 'alcove',
    productName: 'Alcove Cabinets',
    discription: 'Fitted Alcove Cabinets to fully utilise those awkward spaces.',
    images: [Image2, Image2]
  },
  {
    src: Image3,
    path: 'fitted',
    productName: 'Fitted Cabinets',
    discription: 'Home office, Boot rooms, kitchens and more.We can make storage for any space in your home.',
    images: [Image3, Image3, Image3, Image3]
  },
  {
    src: Image4,
    path: 'cabinets',
    productName: 'Cabinets',
    discription: 'Home office, Boot rooms, kitchens and more.We can make storage for any space in your home.',
    images: [Image4, Image4, Image4]
  },
]

export { productsArr }