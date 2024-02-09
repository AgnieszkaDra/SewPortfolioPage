import React  from 'react';
import { CategoryProps } from '../../interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Products.module.scss';


const Category: React.FC<CategoryProps> = ({ name, id, editable, displayedCategorySettings, background }) => {
  const onOpenCategory = () => {
    displayedCategorySettings?.setIsDisplayingCategory(true);
    displayedCategorySettings?.setSelectedCategoryId(id);
 };

 const style = {
  backgroundImage: `url(${background})`
  }

  return (
    <div 
    className={styles.category} 
    style={style}
    onClick={!editable ? onOpenCategory : () => {}}
    >
      <div className={styles.category__content} >
     
         <h2 className={styles.category__name}>{name}</h2> 
    
         
      
        {/* <div>
          <h5></h5>
        </div> */}
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