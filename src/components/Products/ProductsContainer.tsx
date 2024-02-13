import React, { useEffect, useState} from 'react';
import products from '../../data/products.ts';
import { ProductsContainerProps } from '../../interfaces.ts';
import Product from './Product.tsx';
import { useShowModal } from '../../hooks/useShowModal';
import styles from './Products.module.scss';

const ProductsContainer: React.FC<ProductsContainerProps> = ({editable, categoryId, displayedCategorySettings }) => {

  const matchedCategory = products.categories.find(category => category.id === categoryId);
 
  const onCloseCategory = () => {
    displayedCategorySettings?.setIsDisplayingCategory(false);
  };

  const [isLoaded, setIsLoaded] = useState(false);
  const { showModal, selectedItem, handleOpenModal, handleCloseModal } = useShowModal();
 
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
          <>
          <Product key={index} index={index} item={item} onClick={() => handleOpenModal(item)}/>
          </>
        ))}
      </ul>
      {showModal && matchedCategory?.items?.map((item) => (
          <dialog className={styles.modal}>
            <div className={styles.modal__content}>
            <div className={styles.modal__images} style={{backgroundImage: `url(${item.image})`}}>
           
          
       </div>
        <div className={styles.modal__description}>
          <div className={styles.close} onClick={handleCloseModal}>Zamknij</div>
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
       
      </dialog>
          
        ))}
     
    </section>
  );
};

export default ProductsContainer;