import  { useEffect, useState } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import Product from './Product.tsx';
import { useShowProduct } from '../../../hooks/useShowModal.tsx';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { IoMdClose } from "react-icons/io";
import styled from 'styled-components';
import products from '../../../data/products.ts';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories, setProducts, setCategoryProducts } from '../../../store/actions/actions.tsx';
import { AppState } from '../../../interfaces.ts';

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

const ProductStyle = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.smokeWhite};
  position: relative
`

const ProductImage = styled.div`
  width: 50%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

const IconCloseWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: ${({ theme }) => theme.colors.veryLightGrey};
  padding: 15px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  svg {
    width:100%;
    height: 100%;
  }
`;

const IconClose = styled(IoMdClose)`
  color: ${({ theme }) => theme.colors.text};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.smokeWhite};
  padding: 2px;
  height: 100%;
`;

const BoxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  width: '960px',
  height:'90%',
  p: 4,
}

const ProductDescription = styled.div`
  padding-left: 45px;
`;

  useEffect(() => {
    setIsLoaded(true); 
  }, []);

  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(setProducts(products))
    dispatch(setCategories(products));
    if (categoryName) {
      dispatch(setCategoryProducts(products, categoryName));
    }
  }, [dispatch,  categoryName]);

  const productsOfCategory = useSelector((state: AppState) => state.productsOfCategory);
  
  return (
    <section style={{ width: '100%', position: 'relative' }}>
      <ProductsWrapper>
        <h1 style={{ textAlign: 'center' }}>{product?.name}</h1>
        <StyledLink to={`/`}>
          <h5> Strona główna /  {product?.name} </h5>
        </StyledLink>
        <ProductsList isLoaded={isLoaded}>
          {productsOfCategory &&
            Object.values(productsOfCategory).map((item: object, index: number) => (
              <Product
                key={index}
                index={index}
                item={item}
                editable={false}
                onClick={() => handleOpenProduct(item)}
                displayedProductSettings={displayedProductSettings}
              />
            ))}
        </ProductsList>
        { showProduct && selectedItem && (
          <>        
            <Modal
              open={ showProduct }
              onClose={ handleCloseProduct }
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <ProductStyle>
                <Box sx={ BoxStyle }>
                  <ProductImage style={{ backgroundImage: `url(${ selectedItem.imageBackground })`}}>
                  </ProductImage>
                  <ProductDescription>
                    <IconCloseWrapper onClick={ handleCloseProduct }>
                      <IconClose />
                    </IconCloseWrapper>
                    <h1>{ selectedItem.title }</h1>
                    <p>{ selectedItem.price }</p>
                    <div>
                      <ul>
                        <li>{ selectedItem.feature }</li>
                      </ul> 
                    </div>
                  </ProductDescription>
                </Box>
              </ProductStyle>
            </Modal>
          </>
          )
        }
      </ProductsWrapper>
    </section>
  );
};

export default ProductsContainer;