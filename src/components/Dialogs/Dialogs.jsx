import styles from './Dialogs.module.css';
import DialogSection from './DialogSection/DialogSection';
import MessageSectionContainer from './MessageSection/MessageSectionContainer';

const Dialogs = (props) => {
  return (
    <div className={styles.grid_wrapper}>
      <DialogSection data={props.stateDialogs.dialogs} />
      <MessageSectionContainer
        stateMessages={props.stateDialogs.messages}
        newMessageText={props.stateDialogs.newMessageText}
        /* addMessage={props.addMessage}
        updateNewMessageText={props.updateNewMessageText} */
        dispatch={props.dispatch}
        store={props.store}
      />
    </div>
  );
};

export default Dialogs;
