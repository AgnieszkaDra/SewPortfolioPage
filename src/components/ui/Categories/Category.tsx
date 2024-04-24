import React  from 'react';
import { CategoryProps } from '../../../interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from '../../Products/Products.module.scss'



const Category: React.FC<CategoryProps> = ({ name, background }) => {
  const style = {
  backgroundImage: `url(${background})`
  }

  return (
    <div 
    className={styles.category} 
    style={style}
   
    >
       <div className={styles.category__content} >
        <h2 className={styles.category__name}>{name}</h2> 
          <a className={styles.category__link}>
          <span className={styles.category__span}>Zobacz produkty</span>
          <div className={styles.category__arrow}>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
          </a>
      </div>
    </div>
  );
};

export default Category;