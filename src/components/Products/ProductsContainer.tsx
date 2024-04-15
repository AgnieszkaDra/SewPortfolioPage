import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import products from '../../data/products.ts';
import { ProductsContainerProps } from '../../interfaces.ts';
import Product from './Product.tsx';
import styles from './Products.module.scss';

const ProductsContainer: React.FC<ProductsContainerProps> = () => {
  
  const { categoryName } = useParams()

  const product = products.categories.find(category => category.name === categoryName);
  const { name } = product;
 
  const [isLoaded, setIsLoaded] = useState(false);
 
  useEffect(() => {
    setIsLoaded(true); 
  }, []);

  return (
    <section className={`${styles.section}`}>
      <h1 className={styles.section__title}>{name}</h1>
      <div className={styles.section__nav}>
        <Link 
          to={`/`} 
          className={styles.section__nav__link}
        >
          <h5> Strona główna /  {product?.name} </h5>
        </Link>
      </div>
      <ul className={`${styles.products} ${isLoaded ? styles.open : ''}`} >
       {product?.items?.map((item, index) => (
         <Product key={index} index={index} item={item}/>
        ))}
      </ul>
    </section>
  );
};

export default ProductsContainer;