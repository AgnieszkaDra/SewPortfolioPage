import { NavigationProps } from '../../../../interfaces';
import styles from './Navigation.module.scss';


export const Navigation: React.FC<NavigationProps> = ({ isNavbarOpen }) => {
 

  return (
    <>
    <nav className={`${styles.nav} ${isNavbarOpen ? styles.open : ''}`}>
      <div className={styles.nav__hamburger}></div>
      <div className={styles.nav__menu}>
        <ul>
          <li>Strona główna</li>
          <li>Strefa dziecka</li>
          <li>Strefa kobiet</li>
        </ul>
      </div>
    </nav> 
    </>
  )

}


export default Navigation