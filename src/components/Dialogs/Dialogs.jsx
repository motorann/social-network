import styles from './Dialogs.module.css';
import DialogSection from './DialogSection/DialogSection';
import MessageSection from './MessageSection/MessageSection';

const Dialogs = () => {
  return (
    <div className={styles.grid_wrapper}>
      <DialogSection />
      <MessageSection />
    </div>
  );
};

export default Dialogs;
