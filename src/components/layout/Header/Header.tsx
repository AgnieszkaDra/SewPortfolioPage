import { useState }  from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Navigation from '../../ui/Navigation/Navigation';
import Carousel from '../../ui/Carousel/Carousel';
import carousel from '../../../data/carousel';
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
  z-index: 3;
  background-color: transparent;
`;


const Header  = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  }

  return (
    <HeaderWrapper>
      <NavigationWrapper>
        <HamburgerWrapper 
          navbarOpen={navbarOpen} 
          onClick={handleToggle}
        >
          { navbarOpen ? <IoMdClose /> : <GiHamburgerMenu /> } 
        </HamburgerWrapper>
        <Navigation isNavbarOpen={navbarOpen}></Navigation>
      </NavigationWrapper>
      <Carousel images={carousel}></Carousel>
    </HeaderWrapper>
  );
};

export default Header