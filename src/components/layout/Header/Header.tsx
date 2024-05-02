
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
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

const IconCloseWrapper = styled.div<{ navbarOpen: boolean }>`

position: absolute;
top: 0px;
left: 0px;
background-color: ${({ theme }) => theme.colors.chocoDarken};
padding: 15px;
width:50px;
z-index: 10;
border: 3px solid pink;
display: flex;
flex-direction: column;
justify-content: space-between;
svg {
  width:100%;
  height: 100%;
  z-index: 3;
 
}
`;

const IconClose = styled(IoMdClose)`
  width: 100%;
  height: 100%;
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
  z-index: 3;
  background-color: transparent;
`;

const Header  = () => {
  const { navbarOpen, toggleNavbar } = useToggleNavbar();
  return (
    <HeaderWrapper>
      <NavigationWrapper>
        {navbarOpen ? (
          <IconCloseWrapper navbarOpen={navbarOpen} onClick={toggleNavbar}>
            <IconClose />
          </IconCloseWrapper>
        ) : (
          <HamburgerWrapper navbarOpen={navbarOpen} onClick={toggleNavbar}>
            <GiHamburgerMenu />
          </HamburgerWrapper>
        )}
        <Navigation isNavbarOpen={navbarOpen} />
      </NavigationWrapper>
      <Carousel images={carousel} />
    </HeaderWrapper>
  );
};

export default Header;