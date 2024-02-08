import React from 'react';
import products from '../../data/products.ts';
import { ProductDetailsProps } from '../../interfaces.ts';
import styles from './Products.module.scss';

const ProductDetails: React.FC<ProductDetailsProps> = ({ categoryId }) => {

  const matchedCategory = products.categories.find(category => category.id === categoryId);
  return (
    <section className={styles.section}>
      {matchedCategory?.images?.map((image, index) => (
        <img src={image} key={index} alt={`Image ${index}`} />
      ))}
    </section>
  );
};

export default ProductDetails;