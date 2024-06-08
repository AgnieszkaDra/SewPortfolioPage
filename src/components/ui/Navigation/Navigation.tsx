import { Link as RouterLink } from 'react-router-dom';
import { NavigationProps } from '../../../interfaces';
import styled from 'styled-components';
import { IoMdClose } from "react-icons/io";
import { useToggleNavbar } from '../../../hooks/useNavbar';

const NavigationWrapper = styled.nav<{ isOpen: boolean }>`
  ${({ isOpen, theme }) =>
    isOpen && `
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
  ${({ isOpen }) =>
    !isOpen && `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: row; 
    background-color: transparent;
    z-index: 3;
    @media screen and (max-width: 575px) {
      flex-direction: column;
    }
  `}
`;

const IconCloseWrapper = styled.div<{ navbarOpen: boolean }>`
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

export const Navigation: React.FC<NavigationProps> = ({ isNavbarOpen, onClick }) => {
  const { navbarOpen } = useToggleNavbar();
  return (
    <>
    { isNavbarOpen ? (
      <NavigationWrapper isOpen={true}>
        <IconCloseWrapper navbarOpen={navbarOpen} onClick={ onClick }>
          <IconClose />
        </IconCloseWrapper>
        <div style={{ padding: '50px', width: '95%', marginLeft: 'auto' }}>
          <ul style={{  width: '25%' }}>
            <MenuElement>
              <StyledLink to={'/'}>Strona główna</StyledLink>
            </MenuElement>
            <MenuElement>
              <StyledLink to={'/Dziecko'}>Strefa dziecka</StyledLink> 
            </MenuElement>
            <MenuElement>
              <StyledLink to={'/Kobieta'}>Strefa kobiet</StyledLink>
            </MenuElement>
          </ul>
        </div>
      </NavigationWrapper>
        ) : (
        <NavigationWrapper isOpen={false} />
        )
    }
  </>
)
}

export default Navigation