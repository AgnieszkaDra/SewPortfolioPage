import  { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import products from '../../../data/products.ts';

import Product from './Product.tsx';
import styles from '../../Products/Products.module.scss'
import { useShowProduct } from '../../../hooks/useShowModal.tsx';

const ProductsContainer = () => {
  
  const { categoryName } = useParams()
  const product = Object.values(products).find(category => category.name === categoryName);

  const [isLoaded, setIsLoaded] = useState(false);

  const [isDisplayingProduct, setIsDisplayingProduct] = useState(false);

  const displayedProductSettings = { setIsDisplayingProduct,  isDisplayingProduct};
 
  const { showProduct, selectedItem, handleOpenProduct, handleCloseProduct } = useShowProduct();


  useEffect(() => {
    setIsLoaded(true); 
  }, []);

  return (
    <section className={`${styles.section}`}>
      <h1 className={styles.section__title}>{product?.name}</h1>
      <div className={styles.section__nav}>
        <Link 
          to={`/`} 
          className={styles.section__nav__link}
        >
          <h5> Strona główna /  {product?.name} </h5>
        </Link>
      </div>
      <ul className={`${styles.products} ${isLoaded ? styles.open : ''}`} >
       {product?.items?.map((item: object, index: number) => (
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
      {showProduct && selectedItem && (
  <div className={styles.modal}>
    <div className={styles.modal__content}>
      <div className={styles.modal__images} style={{backgroundImage: `url(${selectedItem.imageBackground})`}}>
      </div>
      <div className={styles.modal__description}>
        <div className={styles.close} onClick={handleCloseProduct}>Zamknij</div>
        <h2>{selectedItem.title}</h2>
        <p>{selectedItem.price}</p>
        <div className={styles.list}>
          <ul>
            <li>{selectedItem.feature}</li>
          </ul> 
        </div>
      </div>
    </div>
  </div>
)}
    </section>
  );
};

export default ProductsContainer;