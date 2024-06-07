import { useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import Navigation from '../../ui/Navigation/Navigation';
import Carousel from '../../ui/Carousel/Carousel';
import carousel from '../../../data/carousel';
import { useToggleNavbar } from '../../../hooks/useNavbar';
import styled from 'styled-components';

const HamburgerWrapper = styled.div<{ navbarOpen: boolean }>`
  height: 26px;
  width: 32px;
  position: absolute;
  top: 17px;
  left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  svg {
    width:100%;
    height: 100%;
    z-index: 3;
  }
`;

const HeaderWrapper = styled.header`
  height: 100vh;
  position: relative;
  color: ${({ theme }) => theme.colors.text};
`;

const NavigationWrapper = styled.div`
  width: 100%;
  height: 10vh;
  position: relative;
  display: flex;
  z-index: 2;
  background-color: transparent;
`;

const Header  = () => {
  const { navbarOpen, toggleNavbar } = useToggleNavbar();
  const location = useLocation();
  const showCarousel = location.pathname === '/' || location.pathname === '/category';
  return (
    <HeaderWrapper>
      <NavigationWrapper>
        { navbarOpen ? (
          <Navigation 
            isNavbarOpen={navbarOpen} 
            onClick={toggleNavbar}
          />
        ) : (
          <HamburgerWrapper 
            navbarOpen={navbarOpen} 
            onClick={toggleNavbar}
          >
            <GiHamburgerMenu />
          </HamburgerWrapper>
        ) }
      </NavigationWrapper>
      {showCarousel && <Carousel images={carousel} />}
    </HeaderWrapper>
  );
};

export default Header;