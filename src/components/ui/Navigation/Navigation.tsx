
import { NavigationProps } from '../../../interfaces';
import styles from './Navigation.module.scss';
import styled from 'styled-components';

const NavigationWrapper = styled.nav<{ isOpen: boolean }>`
{ isOpen && (
  position: absolute;
top: 0;
left: 0;
z-index: 2;
display: flex;
flex-direction: row; 
background-color: bisque;
width: 100%;
min-height: 100vh;
flex-direction: row;
@media screen and (max-width: 575px) {
flex-direction: column;
) :  (
  display: none;
)}


`;

export const Navigation: React.FC<NavigationProps> = ({ isNavbarOpen }) => {
 


  return (
    <>
    {isNavbarOpen ? (
  <NavigationWrapper isOpen={true}>

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