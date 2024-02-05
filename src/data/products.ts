import { v4 as uuidv4 } from 'uuid'
interface ProductsCategory {
  name: string;
  id: string;
}

interface Products {
  categories: ProductsCategory[];
}

export const products: Products = {
      categories: [
      {
        name: 'Bluzy',
        id: uuidv4(),
      },
      {
        name: 'Mama i Ja',
        id: uuidv4(),
      },
      {
        name: 'Akcesoria',
        id: uuidv4(),
      },
    ]
  }
  