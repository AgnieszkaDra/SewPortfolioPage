
import Category from './Category.tsx';
import { ProductsContainerProps } from '../../interfaces.ts';

import styles from './Products.module.scss';

const ProductsContainer: React.FC<ProductsContainerProps> = ({ data}) => {
    return (
    <section className={styles.section}>
        {data.categories.map((category) => (
      <Category 
        key={category.id} 
        images={category.images}  
        name={category.name} 
        id={category.id} 
        editable={false} 
        collection={category.collection}/>
    ))}
    </section>
  );
};

export default ProductsContainer;