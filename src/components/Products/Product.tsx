import React, { useState }  from 'react';
import { ProductProps } from '../../interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import styles from './Products.module.scss';


const Product: React.FC<ProductProps> = ({ index, item, onClick }) => {

  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <>
     <li key={index} 
            className={`${styles.products__product} ${styles.product}`} 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
          <div className={styles.product__image}>
            <div 
              className={`${styles.product__actions} ${styles.actions} ${isHovered ? styles.visible : ''}`}
              onClick={() => onClick(item)}
            >
              <div className={`${styles.actions__view}`}>
              <FontAwesomeIcon icon={faArrowLeft} className={styles.arrowLeft} />
              <FontAwesomeIcon icon={faArrowRight} className={styles.arrowRight}/>
              </div>
            </div>
            <img src={item.image} alt={`Image ${index}`} />
          </div>
            <div className={styles.product__title}>
              <h3>{item.title}</h3>
            </div>
            <div className={styles.product__price}>
              <span>{item.price}zł </span>
            </div>
    </li>
    </>
   )}
  

export default Product;