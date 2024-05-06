import { Link as RouterLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import products from '../../../data/products.ts';
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
 
  return (
    <section style={{ width: '100%', position: 'relative' }}>
      <CategoriesWrapper>
        { Object.keys(products).map((productId) => {
          const category = products[Number(productId)];
        
        return (
          <CategoryWrapper
            key={category.id}
            style={{ backgroundImage: `url(${category.background})`, opacity: '0.7' }}
          >
            <Category>
            <h2 style={{ fontWeight: 700 }}>{category.name}</h2>
              <StyledLink to={`/category/${category.name}`}>
                <span className={'span'}>Zobacz produkty</span>
                <StyledArrow>
                  <FontAwesomeIcon icon={faArrowRight} />
                </StyledArrow>
              </StyledLink>
            </Category>
          </CategoryWrapper>
        )})}
      </CategoriesWrapper>
    </section>
    );
  }

export default CategoriesContainer;

