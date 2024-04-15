import { Link } from 'react-router-dom';
import styles from './Products.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import products from '../../data/products.ts';

const CategoriesContainer = () => {
 
  return (
      <section className={styles.section}>
        <div className={styles.categories}>
          { products.categories.map((category) => (
            <div
              className={styles.category}
              key={category.id}
              style={{ backgroundImage: `url(${category.background})` }}
            >
              <div className={styles.category__content} >
              <h2 className={styles.category__name}>{category.name}</h2> 
              <Link 
                to={`/category/${category.name}`} 
                className={styles.category__link}
              >
                <span className={styles.category__span}>Zobacz produkty</span>
                <div className={styles.category__arrow}>
                <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </Link>
              </div>
            </div>
            ))
          }
        </div>
      </section>
    );
  }

export default CategoriesContainer;

