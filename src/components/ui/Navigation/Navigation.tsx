import { NavigationProps } from '../../../interfaces';
import styles from './Navigation.module.scss';


export const Navigation: React.FC<NavigationProps> = ({ isNavbarOpen }) => {
 

  return (
    <>
    <nav className={`${styles.nav} ${isNavbarOpen ? styles.open : ''}`}>
      <div className={styles.nav__hamburger}></div>
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
    </nav> 
    </>
  )

}


export default Navigation