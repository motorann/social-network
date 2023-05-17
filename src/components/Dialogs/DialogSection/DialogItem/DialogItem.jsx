import { NavLink } from 'react-router-dom';
import styles from './DialogItem.module.css';

const DialogItem = (props) => {
  return (
    <div>
      <NavLink
        className={(state) => (state.isActive ? styles.active : styles.item)}
        to={'/dialogs/' + props.name}
      >
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
