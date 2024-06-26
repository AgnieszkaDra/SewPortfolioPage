import { Link as RouterLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useToggleNavbar } from '../../../hooks/useNavbar';
import styled from 'styled-components';

const NavigationWrapper = styled.nav<{ isShowNavigation: boolean }>`
  ${({ isShowNavigation, theme }) =>
    isShowNavigation && `
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row; 
    background-color: ${theme.colors.smokeWhite};
    @media screen and (max-width: 575px) {
      flex-direction: column;
    }
  `}
  ${({ isShowNavigation }) =>
    !isShowNavigation && `
    display: none;
    }
  `}
`;

const IconCloseWrapper = styled.div<{ isShowNavigation: boolean }>`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: ${({ theme }) => theme.colors.veryLightGrey};
  padding: 15px;
  border: 3px solid pink;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  svg {
    width:100%;
    height: 100%;
  }
  ${({ isShowNavigation }) =>
  !isShowNavigation && `
  display: none;
  }
`}
`;

const IconClose = styled(IoMdClose)`
  color: ${({ theme }) => theme.colors.text};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.smokeWhite};
  padding: 2px;
  height: 100%;
`;

const MenuElement = styled.li`
  text-transform: uppercase;
  letter-spacing: .1em;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(RouterLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.text}; 
    transition: width .25s;
  }
  &:hover::after {
    width: 100%;
  } 
`;

const HamburgerWrapper = styled.div<{ isShowNavigation: boolean }>`
  ${({ isShowNavigation }) =>
    isShowNavigation && `
    display: none;
    }
  `}
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

export const Navigation = () =>  {
  const { navbarOpen, toggleNavbar } = useToggleNavbar();
 
  return (
    <>
      <NavigationWrapper
        isShowNavigation = {navbarOpen}
        onClick={toggleNavbar}
      >
        <IconCloseWrapper  
          isShowNavigation = {navbarOpen} 
          onClick={ toggleNavbar }>
        <IconClose />
        </IconCloseWrapper>
        <div style={{ padding: '50px', width: '95%', marginLeft: 'auto' }}>
          <ul style={{  width: '25%' }}>
            <MenuElement>
              <StyledLink to={'/'}>Strona główna</StyledLink>
            </MenuElement>
            <MenuElement>
              <StyledLink to={'/category/Dziecko'}>Strefa dziecka</StyledLink> 
            </MenuElement>
            <MenuElement>
              <StyledLink to={'/category/Kobieta'}>Strefa kobiet</StyledLink>
            </MenuElement>
          </ul>
        </div>
      </NavigationWrapper>
      <HamburgerWrapper 
        isShowNavigation = {navbarOpen} 
        onClick={toggleNavbar}
      >
        <GiHamburgerMenu />
      </HamburgerWrapper>
    </>
)
}

export default Navigation