import { useLocation } from 'react-router-dom';import Navigation from '../../ui/Navigation/Navigation';
import Carousel from '../../ui/Carousel/Carousel';
import carousel from '../../../data/carousel';
import styled from 'styled-components';

const HeaderWrapper = styled.header<{ isShowCarousel: boolean }>`
  height: 10vh;
  position: relative;
  color: ${({ theme }) => theme.colors.text};
  ${props =>
    props.isShowCarousel && `
    height: 100vh;
    background-color: transparent;
  `}
`;

const Header  = () => {
 
  const location = useLocation();
  const showCarousel = location.pathname === '/' || location.pathname === '/category';
  // const showNavigation = location.pathname === '/' || location.pathname === '/category';
  return (
    <HeaderWrapper isShowCarousel={showCarousel}>
      <Navigation />
      {showCarousel && <Carousel images={carousel} />}
    </HeaderWrapper>
  );
};

export default Header;