import { useState } from 'react';
import Category from './Category';
import ProductsCategories from './ProductsCategories';
import products from '../../data/products';

import styles from './Products.module.scss';


interface ProductsContainer {
    displayedCategorySettings: {
    setIsDisplayingCategory: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

const ProductsContainer = (props: ProductsContainer) => {
  const [isDisplayingCategory, setDisplayingCategory] = useState(false);

  const renderListItem = (item, i) => {
    return (
      <ProductsCategories
        editable={false}
        key={i}
        displayedCategorySettings={props.displayedCategorySettings}
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