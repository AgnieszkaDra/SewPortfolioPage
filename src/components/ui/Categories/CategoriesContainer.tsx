import { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { AppState } from '../../../interfaces.ts';
import products from '../../../data/products.ts';
import { setCategories, setProducts } from '../../../store/actions/actions.tsx';
import styled from 'styled-components';

const CategoriesWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: max(30px);
  margin: 50px;
  color: ${({ theme }) => theme.colors.smokeWhite};

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
    margin: 20px;
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 20px;
  }

  @media screen and (max-width: 575px) {
    grid-template-columns: 1fr;
    margin: 10px;
  }
`;

const CategoryWrapper = styled.linearGradient`
  height: 400px;
  padding: 50px 50px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Category = styled.div`
  display: grid;
  grid-template-rows: 200px 100px;
  color: var(--color-white);
  h2 {
    text-align: right;
  }
`;

const StyledLink = styled(RouterLink)`
  font-size: ${({ theme }) => theme.fontSize.medium};
  display: grid;
  grid-template-columns: 60% 40%;
  position: relative;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.white};
  &:hover {
    font-size: ${({ theme }) => `calc(${theme.fontSize.medium} + 0.1rem)`};
  }

  &::after {
      content: '';
      height: 2px;
      width: 0;
      background-color: currentColor;
      position: absolute;
      bottom: 0px;
      left: 10px;
      -webkit-transition: width .25s;
      transition: width .25s;
  }

  &:hover::after {
      width: 90%;
  }
  .span {
    grid-column: 1/2;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &:hover {
      background: 0;
    }
  }
`;

const StyledArrow = styled.div`
  grid-column: 2/3;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CategoriesContainer = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setProducts(products))
    dispatch(setCategories(products));
  }, [dispatch]);

//  const products2 = useSelector((state) => state.productsElements)
//  const categories = useSelector((state) => state.productsElementsCategories)
  const categories = useSelector((state: AppState) => state.productsElementsCategories);
  const categoriesProducts = Object.values(categories).map(product => product)

  return (
    <section style={{ width: '100%', position: 'relative' }}>
      <CategoriesWrapper>
        { categoriesProducts.map((product) => {
        return (
              <CategoryWrapper
                key={product.id}
                style={{ backgroundImage: `url(${product.imageBackground})`, opacity: '0.7' }}
              >
                <Category>
                  <h2 style={{ fontWeight: 700 }}>{product.name}</h2>
                    <StyledLink to={`/category/${product.name}`}>
                      <span className={'span'}>Zobacz produkty</span>
                      <StyledArrow>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </StyledArrow>
                  </StyledLink>
                </Category>
              </CategoryWrapper>
              )
            })
          }
      </CategoriesWrapper>
    </section>
  )

}

export default CategoriesContainer;

