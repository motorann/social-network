import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        className={`${styles.header} ${styles.logo}`}
        src="https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884__340.png"
      />
      header
    </header>
  );
};

export default Header;
