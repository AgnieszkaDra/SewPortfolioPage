import  { useEffect, useState } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';

import products from '../../../data/products.ts';

import Product from './Product.tsx';
import styles from '../../Products/Products.module.scss'
import { useShowProduct } from '../../../hooks/useShowModal.tsx';
import styled from 'styled-components';

const ProductsContainer = () => {
  
  const { categoryName } = useParams()
  const product = Object.values(products).find(category => category.name === categoryName);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDisplayingProduct, setIsDisplayingProduct] = useState(false);
  const displayedProductSettings = { setIsDisplayingProduct,  isDisplayingProduct};
  const { showProduct, selectedItem, handleOpenProduct, handleCloseProduct } = useShowProduct();

  const ProductsWrapper = styled.div`
    color: ${({ theme }) => theme.colors.text};
  `;

  const StyledLink = styled(RouterLink)`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textLight};
    text-decoration: none;
  `;

  const ProductsList = styled.ul<{ isLoaded: boolean }>`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
    padding: 20px;
    @media screen and (max-width: 1000px) {
      grid-template-columns: repeat(3, 1fr);
    }
  
    @media screen and (max-width: 767px) {
      grid-template-columns: repeat(2, 1fr);
    }
  
    @media screen and (max-width: 575px) {
      grid-template-columns: 1fr;
    }

    @keyframes slideUp {
      from {
          bottom: -100px;
      }
  
      to {
          bottom: 0;
      }
    }

    ${props =>
      props.isLoaded && `
      animation: slideUp 2s ease-in-out forwards;
    `}
  `;

  useEffect(() => {
    setIsLoaded(true); 
  }, []);

  return (
    <section style={{ width: '100%', position: 'relative' }}>
      <ProductsWrapper>
        <h1 style={{ textAlign: 'center' }}>{product?.name}</h1>
        <StyledLink to={`/`}>
          <h5> Strona główna /  {product?.name} </h5>
        </StyledLink>
        <ProductsList isLoaded={isLoaded}>
          { product?.items?.map((item: object, index: number) => (
            <Product 
              key={index} 
              index={index} 
              item={item}
              editable={false}
              onClick={() => handleOpenProduct(item)}
              displayedProductSettings= {displayedProductSettings}
              />
            ))}
        </ProductsList>
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
      </ProductsWrapper>
    </section>
  );
};

export default ProductsContainer;