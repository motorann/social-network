import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserVneck,
  faMessages,
  faNewspaper,
  faMusic,
  faGear,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <FontAwesomeIcon icon={faUserVneck} />
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <FontAwesomeIcon icon={faMessages} />
          <NavLink to="/dialogs">Messages</NavLink>
        </li>
        <li>
          <FontAwesomeIcon icon={faNewspaper} />
          <NavLink to="/news">News</NavLink>
        </li>
        <li>
          <FontAwesomeIcon icon={faMusic} />
          <NavLink to="/music">Music</NavLink>
        </li>
        <li>
          <FontAwesomeIcon icon={faGear} />
          <NavLink to="/settings">Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
