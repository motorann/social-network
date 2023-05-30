import styles from './Dialogs.module.css';
import DialogSection from './DialogSection/DialogSection';
import MessageSection from './MessageSection/MessageSection';

const Dialogs = (props) => {
  // let dialogsData = [
  // { id: 1, name: 'Anna' },
  // { id: 2, name: 'Katherine' },
  //{ id: 3, name: 'Alex' },
  //  { id: 4, name: 'Ben' },
  //{ id: 5, name: 'Bill' },
  // ];

  return (
    <div className={styles.grid_wrapper}>
      <DialogSection data={props.dialogsData} />
      <MessageSection data={props.messagesData} />
    </div>
  );
};

export default Dialogs;
