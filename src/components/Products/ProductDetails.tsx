import React from 'react';
import products from '../../data/products.ts';
import { ProductDetailsProps } from '../../interfaces.ts';
import styles from './Products.module.scss';

const ProductDetails: React.FC<ProductDetailsProps> = ({editable, categoryId, displayedCategorySettings }) => {

  const matchedCategory = products.categories.find(category => category.id === categoryId);
  const onCloseCategory = () => {
    displayedCategorySettings?.setIsDisplayingCategory(false);
  };
  return (
    <section className={styles.section}>
      <h1>{matchedCategory?.name}</h1>
      <div className={styles.section__nav}>
        <div>
          <h5 onClick={!editable ? onCloseCategory : () => {}}>
          Strona główna/
        </h5>
        <i></i>
        <h5>
          {matchedCategory?.name}
        </h5> 
        </div>
        <div>input</div>
       
      </div>
      <div className={styles.products}>
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