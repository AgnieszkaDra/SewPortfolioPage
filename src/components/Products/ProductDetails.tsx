import React, { useEffect, useState} from 'react';
import products from '../../data/products.ts';
import { ProductDetailsProps } from '../../interfaces.ts';
import styles from './Products.module.scss';

const ProductDetails: React.FC<ProductDetailsProps> = ({editable, categoryId, displayedCategorySettings }) => {
  
  const matchedCategory = products.categories.find(category => category.id === categoryId);
  const onCloseCategory = () => {
    displayedCategorySettings?.setIsDisplayingCategory(false);
  };

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); // Set isLoaded to true when the component mounts
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
      <div className={`${styles.products} ${isLoaded ? styles.open : ''}`} >
        {matchedCategory?.images?.map((image, index) => (
       <div key={index}>
          <img src={image} alt={`Image ${index}`} />
        </div>
      ))}
      </div>
    </section>
  );
};

export default ProductDetails;