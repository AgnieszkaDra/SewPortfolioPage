import React from 'react';
import Category from './Category.tsx';
import { CategoriesContainerProps } from '../../interfaces.ts';

import products from '../../data/products.ts';

import styles from './Products.module.scss';

const CategoriesContainer:React.FC<CategoriesContainerProps>= ({displayedCategorySettings}) => {
  
      return (
      <section className={styles.section}>
        <div className={styles.categories}>
          {products.categories.map((category) => (
          <Category 
            key={category.id} 
            items={category.items}  
            name={category.name} 
            id={category.id} 
            editable={false}
            background={category.background}
            collection={category.collection}
            displayedCategorySettings={displayedCategorySettings}
          />
        ))}
        </div>
      </section>
    );
  }


export default CategoriesContainer;