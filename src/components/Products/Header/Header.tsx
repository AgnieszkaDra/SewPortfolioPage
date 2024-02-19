import { useState }  from 'react';

import Navigation from './Navigation/Navigation';
import styles from './Header.module.scss';


const Header  = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  }

  return (
    <header className={styles.header}>
    
      <div className={styles.header__nav}>
      <div className={`${styles.hamburger} ${navbarOpen ? styles.close : ''}`} onClick={handleToggle}>
        <span className={`${styles.hamburger__line} ${styles.line1} ${navbarOpen ? styles.close : ''}`}></span>
        <span className={`${styles.hamburger__line} ${styles.line2} ${navbarOpen ? styles.close : ''}`}></span>
        <span className={`${styles.hamburger__line} ${styles.line3} ${navbarOpen ? styles.close : ''}`}></span>
      </div> 
          <Navigation isNavbarOpen={navbarOpen}></Navigation>
      </div>  
    </header>
    
  );
};

export default Header