import { v4 as uuidv4 } from 'uuid'
import { Products } from '../interfaces'
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
        id: uuidv4(),
        images: [basic1, basic2, basic3, basic4, basic5],
        background: basicBackground,
        editable: false,
        collection: Collection.BASIC
      },
      {
        name: 'Mama i Ja',
        id: uuidv4(),
        images: [mothChild1, mothChild2],
        background: mothChildBackground,
        editable: false,
        collection: Collection.MOTHER__AND__CHILD
      },
      {
        name: 'Akcesoria',
        id: uuidv4(),
        background: accessoriesBackground,
        editable: false,
        collection: Collection.ACCESSORIES
      },
      {
        name: 'Spódnice',
        id: uuidv4(),
        background: skirtsBackground,
        editable: false,
        collection: Collection.SKIRTS
      },
    ]
  }

  export default products