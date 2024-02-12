import React, { useEffect, useState} from 'react';
import products from '../../data/products.ts';
import { ProductsContainerProps } from '../../interfaces.ts';
import Product from './Product.tsx';

import styles from './Products.module.scss';

const ProductsContainer: React.FC<ProductsContainerProps> = ({editable, categoryId, displayedCategorySettings }) => {

  const matchedCategory = products.categories.find(category => category.id === categoryId);
 
  const onCloseCategory = () => {
    displayedCategorySettings?.setIsDisplayingCategory(false);
  };

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); 
  }, []);

  return (
    <section className={`${styles.section}`}>
      <h1 className={styles.section__title}>{matchedCategory?.name}</h1>
      <div className={styles.section__nav}>
        <div>
          <h5 className={styles.section__nav__h5} onClick={!editable ? onCloseCategory : () => {}}>
          Strona główna /  {matchedCategory?.name} 
          </h5>
        </div>
        <div>input</div>
      </div>
      <ul className={`${styles.products} ${isLoaded ? styles.open : ''}`} >
        {matchedCategory?.items?.map((item, index) => (
          <Product key={index} index={index} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default ProductsContainer;