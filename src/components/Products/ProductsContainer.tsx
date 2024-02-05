import { useState } from 'react';
import Category from './Category';
import ProductsCategory from './ProductsCategory';
import products from '../../data/products';

import styles from './Products.module.scss';



const ProductsContainer = () => {
  const [isDisplayingCategory, setDisplayingCategory] = useState(false);

  const renderListItem = (item, i) => {
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
            {products.categories.map((item, i) => {
          return renderListItem(item, i)
        })}
         </div>
      );
   }
  };
  
  export default ProductsContainer