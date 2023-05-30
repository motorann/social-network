import DialogItem from './DialogItem/DialogItem';
import styles from './DialogSection.module.css';

const DialogSection = (props) => {
  // console.log(props);
  let dialogsItems = props.data.map((data) => (
    <DialogItem name={data.name} key={data.id} />
  ));

  return <div className={styles.dialogs}>{dialogsItems}</div>;
};

export default DialogSection;
