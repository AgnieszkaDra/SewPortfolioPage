import { v4 as uuidv4 } from 'uuid'
import { Products } from '../interfaces'
import basic1 from '../assets/basics/basic1.jpg'
import basic2 from '../assets/basics/basic2.jpg'

enum Collection { BASIC = 5, MOTHER__AND__CHILD = 10, ACCESSORIES = 200 }

export const products: Products = {
      categories: [
      {
        name: 'Bluzy',
        id: uuidv4(),
        images: [basic1, basic2],
        editable: false,
        collection: Collection.BASIC
      },
      {
        name: 'Mama i Ja',
        id: uuidv4(),
        editable: false,
        collection: Collection.MOTHER__AND__CHILD
      },
      {
        name: 'Akcesoria',
        id: uuidv4(),
        editable: false,
        collection: Collection.ACCESSORIES
      },
    ]
  }

  export default products