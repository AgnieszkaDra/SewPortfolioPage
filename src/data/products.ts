import { Products } from '../interfaces'
import ball1a from '../assets/AreaOfChild/Blouses/Ball/ball.1a.jpg'
import ball1b from '../assets/AreaOfChild/Blouses/Ball/ball.1b.jpg'
import rabbit1a from '../assets/AreaOfChild/Blouses/Rabbit/rabbit.1a.jpg'
import rabbit1b from '../assets/AreaOfChild/Blouses/Rabbit/rabbit.1b.jpg'
import rabbit1c from '../assets/AreaOfChild/Blouses/Rabbit/rabbit.1c.jpg'
import rabbit1d from '../assets/AreaOfChild/Blouses/Rabbit/rabbit.1d.jpg'
import rabbit1e from '../assets/AreaOfChild/Blouses/Rabbit/rabbit.1e.jpg'
import rabbit1f from '../assets/AreaOfChild/Blouses/Rabbit/rabbit.1f.jpg'
import rabbit2a from '../assets/AreaOfChild/Blouses/Rabbit/rabbit.2a.jpg'
import rabbit2b from '../assets/AreaOfChild/Blouses/Rabbit/rabbit.2b.jpg'
import rabbit2c from '../assets/AreaOfChild/Blouses/Rabbit/rabbit.2c.jpg'
import skateboards1a from '../assets/AreaOfChild/Blouses/Skateboards/skateboards.1a.jpg'
import skateboards1b from '../assets/AreaOfChild/Blouses/Skateboards/skateboards.1b.jpg'
import skateboards1c from '../assets/AreaOfChild/Blouses/Skateboards/skateboards.1c.jpg'
import skateboards1d from '../assets/AreaOfChild/Blouses/Skateboards/skateboards.1d.jpg'
import skateboards1e from '../assets/AreaOfChild/Blouses/Skateboards/skateboards.1e.jpg'
import violet1a from '../assets/AreaOfChild/Blouses/Violet/Violet.1a.jpg'
import violet1b from '../assets/AreaOfChild/Blouses/Violet/Violet.1b.jpg'
import violet1c from '../assets/AreaOfChild/Blouses/Violet/Violet.1c.jpg'
import wolf1a from '../assets/AreaOfChild/Blouses/Wolf/Wolf.1a.jpg'
import wolf1b from '../assets/AreaOfChild/Blouses/Wolf/Wolf.1b.jpg'
import wolf1c from '../assets/AreaOfChild/Blouses/Wolf/Wolf.1c.jpg'
import wolf1d from '../assets/AreaOfChild/Blouses/Wolf/Wolf.1d.jpg'
import violetComplet1a from '../assets/AreaOfChild/Complets/violet/violet-complet.1a.jpg'
import violetComplet1b from '../assets/AreaOfChild/Complets/violet/violet-complet.1b.jpg'
import violetComplet1c from '../assets/AreaOfChild/Complets/violet/violet-complet.1c.jpg'
import whale1a from '../assets/AreaOfChild/Complets/whale/whale.1a.jpg'
import whale1b from '../assets/AreaOfChild/Complets/whale/whale.1b.jpg'
import whale1c from '../assets/AreaOfChild/Complets/whale/whale.1c.jpg'
import whale1d from '../assets/AreaOfChild/Complets/whale/whale.1d.jpg'
import cherry1a from '../assets/AreaOfChild/Skirts/Cherry/cherry.1a.jpg'
import cherry1b from '../assets/AreaOfChild/Skirts/Cherry/cherry.1b.jpg'
import cherry1c from '../assets/AreaOfChild/Skirts/Cherry/cherry.1c.jpg'
import fairy1a from '../assets/AreaOfChild/Skirts/Fairy/fairy.1a.jpg'
import fairy1b from '../assets/AreaOfChild/Skirts/Fairy/fairy.1b.jpg'
import hearts1a from '../assets/AreaOfChild/Skirts/Hearts/hearts.1a.jpg'
import hearts1b from '../assets/AreaOfChild/Skirts/Hearts/hearts.1b.jpg'
import hearts1c from '../assets/AreaOfChild/Skirts/Hearts/hearts.1c.jpg'
import trousers1a from '../assets/AreaOfChild/Trousers/trousers.1a.jpg'
import trousers1b from '../assets/AreaOfChild/Trousers/trousers.1b.jpg'
import trousers1c from '../assets/AreaOfChild/Trousers/trousers.1c.jpg'
import trousers1d from '../assets/AreaOfChild/Trousers/trousers.1d.jpg'
import trousers1e from '../assets/AreaOfChild/Trousers/trousers.1e.jpg'
import trousers1f from '../assets/AreaOfChild/Trousers/trousers.1f.jpg'
import trousersViolet1a from '../assets/AreaOfChild/Trousers/trousersViolet.1a.jpg'
import trousersViolet1b from '../assets/AreaOfChild/Trousers/trousersViolet.1b.jpg'
import trousersWithRabbit1a from '../assets/AreaOfChild/Trousers/trousersWithRabbit.1a.jpg'
import trousersWithRabbit1b from '../assets/AreaOfChild/Trousers/trousersWithRabbit.1b.jpg'
import trousersWithRabbit1c from '../assets/AreaOfChild/Trousers/trousersWithRabbit.1c.jpg'
import band1 from '../assets/areaOfWomen/Accessories/Banding/1.jpg'
import band2 from '../assets/areaOfWomen/Accessories/Banding/2.jpg'
import completBand1 from '../assets/areaOfWomen/Accessories/Complets/1.jpg'
import completBand2 from '../assets/areaOfWomen/Accessories/Complets/2.jpg'
import cap1a from '../assets/AreaOfChild/Accessories/cap.1a.jpg'
import cap1b from '../assets/AreaOfChild/Accessories/cap.1b.jpg'
import cap2a from '../assets/AreaOfChild/Accessories/cap.2a.jpg'
import cap2b from '../assets/AreaOfChild/Accessories/cap.2b.jpg'
import cap2c from '../assets/AreaOfChild/Accessories/cap.2c.jpg'
import forestBag1a from '../assets/AreaOfChild/Accessories/forest-bag.1a.jpg'
import forestBag1b from '../assets/AreaOfChild/Accessories/forest-bag.1b.jpg'
import forestBag1c from '../assets/AreaOfChild/Accessories/forest-bag.1c.jpg'
export const products: Products = {
  All: {
    name: '(ProductsRoot)',
    children: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
  },
  Child: {
    name: '(ProductsChildRoot)',
    children: [1,2,3,4,5]
  },
  1: {
    id: 1,
    name: 'Bluza Ball',
    imageBackground: ball1a,
    imagesCarousel: [ball1a, ball1b],
    price: 100,
    collectionMain: 'Dziecko',
    collectionType: 'Bluzy',
    features:  [ 'bluza wykonana z bawełny', 'luźny krój', 'ciepła' ]
  },
  2: {
    id: 2,
    name: 'Bluza Rabbit',
    imageBackground: rabbit1a,
    imagesCarousel: [rabbit1a, rabbit1b, rabbit1c,  rabbit1d, rabbit1e, rabbit1f, rabbit2a, rabbit2b, rabbit2c],
    price: 90,
    collectionMain: 'Dziecko',
    collectionType: 'Bluzy',
  },
  3: {
    id: 3, 
    name: 'Bluza Skateboard',
    imageBackground: skateboards1a,
    imagesCarousel: [skateboards1a, skateboards1b, skateboards1c,  skateboards1d, skateboards1e ],
    price: 150,
    collectionMain: 'Dziecko',
    collectionType: 'Bluzy',
  },
  4: {
    id: 4,
    name: 'Bluza Violet',
    imageBackground: violet1a,
    imagesCarousel: [violet1a, violet1b, violet1c],
    price: 65,
    collectionMain: 'Dziecko',
    collectionType: 'Bluzy',
  },
  5: {
    id: 5,
    name: 'Bluza Wolf',
    imageBackground: wolf1a,
    imagesCarousel: [wolf1a, wolf1b, wolf1c, wolf1d],
    price: 78,
    collectionMain: 'Dziecko',
    collectionType: 'Bluzy',
  },
  6: {
    id: 6,
    name: 'Komplet Violet',
    imageBackground: violetComplet1a,
    imagesCarousel: [violetComplet1a, violetComplet1b, violetComplet1c],
    price: 100,
    collectionMain: 'Dziecko',
    collectionType: 'Komplety',
  },
  7: {
    id: 7,
    name: 'Komplet Whale',
    imageBackground: whale1a,
    imagesCarousel: [whale1a, whale1b, whale1c, whale1d],
    price: 100,
    collectionMain: 'Dziecko',
    collectionType: 'Komplety',
  },
  8: {
    id: 8,
    name: 'Spódnica Cherry',
    imageBackground: cherry1b,
    imagesCarousel: [cherry1a, cherry1b, cherry1c],
    price: 90,
    collectionMain: 'Dziecko',
    collectionType: 'Spódnice i sukienki',
  },
  9: {
    id: 9, 
    name: 'Spódnica Fairy',
    imageBackground: fairy1a,
    imagesCarousel: [fairy1a, fairy1b],
    price: 90,
    collectionMain: 'Dziecko',
    collectionType: 'Spódnice i sukienki',
  },
  10: {
    id: 10,
    name: 'Spódnica Hearts',
    imageBackground: hearts1a,
    imagesCarousel: [hearts1a, hearts1b, hearts1c],
    price: 90,
    collectionMain: 'Dziecko',
    collectionType: 'Spódnice i sukienki'
  },
  11: {
    id: 11,
    name: 'Spodnie Violet',
    imageBackground: trousersViolet1a,
    imagesCarousel: [trousersViolet1a, trousersViolet1b],
    price: 90,
    collectionMain: 'Dziecko',
    collectionType: 'Spodnie',
  },
  12: {
    id: 12,
    name: 'Spodnie Rabbit',
    imageBackground: trousersWithRabbit1a,
    imagesCarousel: [trousersWithRabbit1a, trousersWithRabbit1b, trousersWithRabbit1c],
    price: 90,
    collectionMain: 'Dziecko',
    collectionType: 'Spodnie',
  },
  13: {
    id: 13, 
    name: 'Spodnie Bear',
    imageBackground: trousers1a,
    imagesCarousel: [trousers1a],
    price: 90,
    collectionMain: 'Dziecko',
    collectionType: 'Spodnie'
  },
  14: {
    id: 14,
    name: 'Spodnie Flowers',
    imageBackground: trousers1b,
    imagesCarousel: [trousers1b],
    price: 90,
    collectionMain: 'Dziecko',
    collectionType: 'Spodnie',
  },
  15: {
    id: 15,
    name: 'Spodnie Strips',
    imageBackground: trousers1c,
    imagesCarousel: [trousers1c],
    price: 90,
    collectionMain: 'Dziecko',
    collectionType: 'Spodnie',
  },
  16: {
    id: 16,
    name: 'Spodnie Strips 2',
    imageBackground: trousers1d,
    imagesCarousel: [trousers1d],
    price: 90,
    collectionMain: 'Dziecko',
    collectionType: 'Spodnie',
  },
  17: {
    id: 17,
    name: 'Spodnie Strips 3',
    imageBackground: trousers1e,
    imagesCarousel: [trousers1e],
    price: 90,
    collectionMain: 'Dziecko',
    collectionType: 'Spodnie',
  },
  18: {
    id: 18,
    name: 'Spodnie Skateboards',
    imageBackground: trousers1f,
    imagesCarousel: [trousers1f],
    price: 90,
    collectionMain: 'Dziecko',
    collectionType: 'Spodnie',
  },
  19: {
    id: 19,
    name: 'Komplet Bear',
    imageBackground: cap1a,
    imagesCarousel: [cap1a, cap1b],
    price: 100,
    collectionMain: 'Dziecko',
    collectionType: 'Komplety',
  },
  20: {
    id: 20, 
    name: 'Czapka Bear',
    imageBackground: cap2a,
    imagesCarousel: [cap2a, cap2b, cap2c],
    price: 120,
    collectionMain: 'Dziecko',
    collectionType: 'Akcesoria',
  },
  21: {
    id: 21,
    name: 'Worek Szkolny Forest',
    imageBackground: forestBag1a,
    imagesCarousel: [forestBag1a, forestBag1b, forestBag1c],
    price: 50,
    collectionMain: 'Dziecko',
    collectionType: 'Akcesoria',
  },
  22: {
    id: 22,
    name: 'Opaski Color',
    imageBackground: band1,
    imagesCarousel: [band1, band2],
    price: 60,
    collectionMain: 'Kobieta',
    collectionType: 'Akcesoria',
  },
  23: {
    id: 23,
    name: 'Komplet Winter',
    imageBackground: completBand1,
    imagesCarousel: [completBand1, completBand2],
    price: 90,
    collectionType: 'Komplety',
  }
}

export default products