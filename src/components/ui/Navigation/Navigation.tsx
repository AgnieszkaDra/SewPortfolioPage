
import { NavigationProps } from '../../../interfaces';
import styles from './Navigation.module.scss';
import styled from 'styled-components';
import { IoMdClose } from "react-icons/io";

const NavigationWrapper = styled.nav<{ isOpen: boolean }>`
  ${ props => props.isOpen && `
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
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

const NavController = styled.div`
height: 70px;
  
    background-color: pink;
    
@media screen and (min-width: 575px) {
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
}
  `;

  const IconCloseWrapper = styled.div`
  background-color: red;
  color: ${({ theme }) => theme.colors.text}; // Set the color to match your theme
  width: 24px; // Adjust width if needed
  height: 24px; // Adjust height if needed
  svg {
    width:100%;
    height: 100%;
    z-index: 3;
  }
`;

const IconClose = styled(IoMdClose)`
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
  height: 100%;
`;

export const Navigation: React.FC<NavigationProps> = ({ isNavbarOpen }) => {
  return (
    <>
    { isNavbarOpen ? (
      <NavigationWrapper isOpen={true}>
        {/* <NavController /> */}
        {/* <IconCloseWrapper>
              <IconClose/>
            </IconCloseWrapper>  */}
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