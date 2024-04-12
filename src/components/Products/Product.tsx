import React, { useState }  from 'react';
import { ProductProps } from '../../interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import styles from './Products.module.scss';

const Product: React.FC<ProductProps> = ({ index, item, onClick }) => {

  const [isHovered, setIsHovered] = useState(false);
  
  return (
   <li key={index} 
        className={`${styles.products__product} ${styles.product}`} 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <figure className={styles.products__image}>
          <div 
            className={`${styles.products__actions} ${isHovered ? styles.visible : ''}`}
            onClick={() => onClick(item)}
          >
            <div className={`${styles.actions__view}`}>
              <FontAwesomeIcon icon={faArrowLeft} className={styles.arrowLeft} />
              <FontAwesomeIcon icon={faArrowRight} className={styles.arrowRight}/>
            </div>
          </div>
          <img src={item.image} alt={`Image ${index}`} />
        </figure>
        <div className={styles.products__caption}>
          <div className={styles.products__title}>
            <h3>{item.title}</h3>
          </div>
          <div className={styles.products__price}>
          <span>{item.price}zł </span>
          </div>
        </div>
    </li>
  )}
  
export default Product;