// import { useLocation } from 'react-router-dom';
import Navigation from '../../ui/Navigation/Navigation';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  height: 10vh;
  position: relative;
  color: ${({ theme }) => theme.colors.text};
`;

const Header  = () => {
 
  // const location = useLocation();
  // const showCarousel = location.pathname === '/' || location.pathname === '/category';
  // const showNavigation = location.pathname === '/' || location.pathname === '/category';
  return (
    <HeaderWrapper>
      <Navigation />
    </HeaderWrapper>
  );
};

export default Header;