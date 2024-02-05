import { useState } from 'react';
import Category from './Category';
import ProductsCategory from './ProductsCategory';
import { v4 as uuidv4 } from 'uuid'
// import products, {ProductsCategory } from '../../data/products';


import styles from './Products.module.scss';

interface CategoryItem {
  name: string;
  id: string;
}

interface Products {
  categories: CategoryItem[];
}

const products: Products = {
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


const ProductsContainer = () => {
  const [isDisplayingCategory] = useState(false);

  const renderListItem = (item: CategoryItem) => {
    return (
      <ProductsCategory
        key={item.id}
        content={item.name}
      />
    )
  }
  
  if (isDisplayingCategory) {
      return <Category/>;
   } else {
      return (
         <div className={styles.section}>
            {products.categories.map((item) => {
          return renderListItem(item)
        })}
         </div>
      );
   }
  };
  
  export default ProductsContainer