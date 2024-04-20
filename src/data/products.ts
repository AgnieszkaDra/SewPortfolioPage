import { v4 as uuidv4 } from 'uuid'
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
import cherry1a from '../assets/AreaOfChild/Skirts and Dresses/Cherry/cherry.1a.jpg'
import cherry1b from '../assets/AreaOfChild/Skirts and Dresses/Cherry/cherry.1b.jpg'
import cherry1c from '../assets/AreaOfChild/Skirts and Dresses/Cherry/cherry.1c.jpg'
import fairy1a from '../assets/AreaOfChild/Skirts and Dresses/Fairy/fairy.1a.jpg'
import fairy1b from '../assets/AreaOfChild/Skirts and Dresses/Fairy/fairy.1b.jpg'
import hearts1a from '../assets/AreaOfChild/Skirts and Dresses/Hearts/hearts.1a.jpg'
import hearts1b from '../assets/AreaOfChild/Skirts and Dresses/Hearts/hearts.1b.jpg'
import hearts1c from '../assets/AreaOfChild/Skirts and Dresses/Hearts/hearts.1c.jpg'
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

import basic1 from '../assets/basics/basic1.jpg'
import basic2 from '../assets/basics/basic2.jpg'
import basic3 from '../assets/basics/basic3.jpg'
import basic4 from '../assets/basics/basic4.jpg'
import basic5 from '../assets/basics/basic5.jpg'
import basicBackground from '../assets/basics/basicBackground.jpg'
import mothChild1 from '../assets/motherAndChild/mothChild1.jpg'
import mothChild2 from '../assets/motherAndChild/mothChild2.jpg'
import accessoriesBackground from '../assets/accessories/accessoriesBackground.jpg'
import mothChildBackground from '../assets/motherAndChild/mothChildBackground.jpg'
import skirtsBackground from '../assets/skirts/skirtsBackground.jpg'

enum Collection { BASIC = 5, MOTHER__AND__CHILD = 10, ACCESSORIES = 200 , SKIRTS = 300 }

export const products: Products = {
      categories: [
      {
        name: 'Bluzy',
        category: 'Child',
        id: uuidv4(),
        items: [
          {
            title: 'Bluza Ball',
            imageBackground: ball1a,
            imagesCarousel: [ball1a, ball1b],
            price: 100,
            // features:  [
            //   { description: 'bluza wykonana z bawełny', /* other properties */ },
            // { description: 'lużny krój', /* other properties */ },
            // { description: 'ciepła', /* other properties */ }
            // ],
            features:  [ 'bluza wykonana z bawełny', 'lużny krój', 'ciepła' ]
          },
          {
            title: 'Bluza Rabbit',
            imageBackground: rabbit1a,
            imagesCarousel: [rabbit1a, rabbit1b, rabbit1c,  rabbit1d, rabbit1e, rabbit1f, rabbit2a, rabbit2b, rabbit2c],
            price: 90
          },
          {
            title: 'Bluza Skateboard',
            imageBackground: skateboards1a,
            imagesCarousel: [skateboards1a, skateboards1b, skateboards1c,  skateboards1d, skateboards1e ],
            price: 150
          },
          {
            title: 'Bluza Violet',
            imageBackground: violet1a,
            imagesCarousel: [violet1a, violet1b, violet1c],
            price: 65
          },
          {
            title: 'Bluza Wolf',
            imageBackground: wolf1a,
            imagesCarousel: [wolf1a, wolf1b, wolf1c, wolf1d],
            price: 78
          }
        ],
        background: basicBackground,
      
        collection: Collection.BASIC
      },
      {
        name: 'Komplety', 
        category: 'Child',
        id: uuidv4(),
        background: violetComplet1a,
        items: [
          {
            title: 'Komplet Violet',
            imageBackground: violetComplet1a,
            imagesCarousel: [violetComplet1a, violetComplet1b, violetComplet1c],
            price: 100,
        },
        {
          title: 'Komplet Whale',
          imageBackground: whale1a,
          imagesCarousel: [whale1a, whale1b, whale1c, whale1d],
          price: 100,
      },
        ],
        collection: Collection.BASIC

      },
      {
        name: 'Mama i Ja',
        category: 'Child',
        id: uuidv4(),
        items: [
          {
            title: 'skirt1',
            imageBackground: mothChild1,
            price: 100
          },
          {
            title: 'skirt2',
            imageBackground: mothChild2,
            price: 90
          },
        ],
        background: mothChildBackground,
    
        collection: Collection.MOTHER__AND__CHILD
      },
      {
        name: 'Akcesoria',
        category: 'Child',
        id: uuidv4(),
        background: accessoriesBackground,
        collection: Collection.ACCESSORIES
      },
      {
        name: 'Spódnice',
        category: 'Child',
        id: uuidv4(),
        background: skirtsBackground,
        items: [
          {
            title: 'Spódnica Cherry',
            imageBackground: cherry1a,
            imagesCarousel: [cherry1a, cherry1b, cherry1c],
            price: 90
          },
          {
            title: 'Spódnica Fairy',
            imageBackground: fairy1a,
            imagesCarousel: [fairy1a, fairy1b],
            price: 90
          },
          {
            title: 'Spódnica Hearts',
            imageBackground: hearts1a,
            imagesCarousel: [hearts1a, hearts1b, hearts1c],
            price: 90
          },

        ],
      
        collection: Collection.SKIRTS
      },
      {
        name: 'Spodnie',
        category: 'Child',
        id: uuidv4(),
        background: skirtsBackground,
        items: [
          {
            title: 'Spodnie Violet',
            imageBackground: trousersViolet1a,
            imagesCarousel: [trousersViolet1a, trousersViolet1b],
            price: 90
          },
          {
            title: 'Spodnie Rabbit',
            imageBackground: trousersWithRabbit1a,
            imagesCarousel: [trousersWithRabbit1a, trousersWithRabbit1b, trousersWithRabbit1c],
            price: 90
          },
        

        ],
      
        collection: Collection.SKIRTS
      },
    ]
  }

  export default products