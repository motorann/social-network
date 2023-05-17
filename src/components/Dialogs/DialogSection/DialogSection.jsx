import DialogItem from './DialogItem/DialogItem';
import styles from './DialogSection.module.css';

const DialogSection = () => {
  let dialogsData = [
    { id: 1, name: 'Anna' },
    { id: 2, name: 'Katherine' },
    { id: 3, name: 'Alex' },
    { id: 4, name: 'Ben' },
    { id: 5, name: 'Bill' },
  ];

  let dialogsItems = dialogsData.map((data) => (
    <DialogItem name={data.name} key={data.id} />
  ));

  return <div className={styles.dialogs}>{dialogsItems}</div>;
};

export default DialogSection;
