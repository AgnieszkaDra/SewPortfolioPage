import { NavigationProps } from '../../../interfaces';
import styles from './Navigation.module.scss';
import styled from 'styled-components';
import { IoMdClose } from "react-icons/io";
import { useToggleNavbar } from '../../../hooks/useNavbar';

const NavigationWrapper = styled.nav<{ isOpen: boolean }>`
  ${ props => props.isOpen && `
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: row; 
      background-color: bisque;
      width: 100%;
      min-height: 100vh;
      @media screen and (max-width: 575px) {
        flex-direction: column;
      }
    `}
  `;

  const IconCloseWrapper = styled.div<{ navbarOpen: boolean }>`
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: ${({ theme }) => theme.colors.smokeWhite};
    padding: 15px;
    min-height: 100vh;
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
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: 2px;
  height: 100%;
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
        <div className={styles.nav__menu}>
        <ul className={styles.list}>
        <li className={styles.list__element}>
          <a>
            Strona główna
          </a>
        </li>
        <li className={styles.list__element}>
          <a>
            Strefa dziecka
          </a>
        </li>
        <li className={styles.list__element}>
          <a>
            Strefa kobiet 
          </a>
        </li>
      </ul>
    </div>
  </NavigationWrapper>
) : (
  <NavigationWrapper isOpen={false} />
)}
  </>
)
}

export default Navigation