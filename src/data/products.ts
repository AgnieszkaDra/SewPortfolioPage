import { v4 as uuidv4 } from 'uuid'
import { Products } from '../interfaces'
// interface ProductsCategory {
//   name: string;
//   id: string;
//   collection?: Collection;
// }

// interface Products {
//   categories: ProductsCategory[];
// }

enum Collection { BASIC = 5, MOTHER__AND__CHILD = 10, ACCESSORIES = 200 }



export const products1: Products = {
      categories: [
      {
        name: 'Bluzy',
        id: uuidv4(),
        collection: Collection.BASIC
      },
      {
        name: 'Mama i Ja',
        id: uuidv4(),
        collection: Collection.MOTHER__AND__CHILD
      },
      {
        name: 'Akcesoria',
        id: uuidv4(),
        collection: Collection.ACCESSORIES
      },
    ]
  }

  export default products1
  