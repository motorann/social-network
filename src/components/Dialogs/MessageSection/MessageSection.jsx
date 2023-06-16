import React from 'react';
import styles from './MessageSection.module.css';
import MessageItem from './MessageItem/MessageItem';
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../../redux/dialogsReducer';

const MessageSection = (props) => {
  let messagesItems = props.messages.map((message) => (
    <MessageItem message={message.message} key={message.id} />
  ));

  let newMessageElement = React.createRef();

  let onAddMessage = () => {
    props.addMessage();
  };

  let onChangeMessageText = () => {
    let currentText = newMessageElement.current.value;
    // props.updateNewMessageText(currentText);
    props.updateNewMessageText(currentText);
  };

  return (
    <div>
      <div className={styles.messages}>{messagesItems}</div>
      <textarea
        onChange={onChangeMessageText}
        ref={newMessageElement}
        value={props.newMessageText}
      ></textarea>
      <button onClick={onAddMessage}>Add message</button>
    </div>
  );
};

export default MessageSection;
