import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import products from '../../data/products.ts';
import { ProductsContainerProps } from '../../interfaces.ts';
import Product from './Product.tsx';
import styles from './Products.module.scss';
import { useShowProduct } from '../../hooks/useShowModal';

const ProductsContainer: React.FC<ProductsContainerProps> = () => {
  
  const { categoryName } = useParams()

  const product = products.categories.find(category => category.name === categoryName);
  const { name } = product;
 
 
  const [isLoaded, setIsLoaded] = useState(false);

  const [isDisplayingProduct, setIsDisplayingProduct] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const displayedProductSettings = { setIsDisplayingProduct, setSelectedProductId, isDisplayingProduct};
 
  const { showProduct, selectedItem, handleOpenProduct, handleCloseProduct } = useShowProduct();


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
         <Product 
          key={index} 
          index={index} 
          item={item}
          editable={false}
          onClick={() => handleOpenProduct(item)}
          displayedProductSettings= {displayedProductSettings}
          />
        ))}
      </ul>
      {showProduct && product?.items?.map((item) => (
        <div className={styles.modal}>
            <div className={styles.modal__content}>
            <div className={styles.modal__images} style={{backgroundImage: `url(${item.image})`}}>
            </div>
        <div className={styles.modal__description}>
          <div className={styles.close} onClick={handleCloseProduct}>Zamknij</div>
          <h2>{ selectedItem?.title }</h2>
          <p>{ selectedItem?.price }</p>
          <div className={styles.list}>
            <ul>
              {selectedItem?.features?.map((feature: string, index: number) => (
                <li key={index}>{feature}</li>
               ))}
            </ul>
          </div>
        </div>
            </div>
       
        </div>
      ))}
    </section>
  );
};

export default ProductsContainer;