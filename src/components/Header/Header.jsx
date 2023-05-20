import styles from './Header.module.css';
// import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// src="./../../../public/hare.png"

const Header = () => {
  return (
    <header className={styles.header}>
      <FontAwesomeIcon icon={faBars} className={styles.icon_bar} />
      <img
        className={`${styles.header} ${styles.logo}`}
        src="https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884__340.png"
      />
      header
    </header>
  );
};

export default Header;
