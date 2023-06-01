import React from 'react';
import styles from './MessageSection.module.css';
import MessageItem from './MessageItem/MessageItem';

const MessageSection = (props) => {
  let messagesItems = props.stateMessages.map((data) => (
    <MessageItem message={data.message} key={data.id} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
  };

  let changeMessageText = () => {
    let currentText = newMessageElement.current.value;
    props.updateNewMessageText(currentText);
  };

  return (
    <div>
      <div className={styles.messages}>{messagesItems}</div>
      <textarea
        onChange={changeMessageText}
        ref={newMessageElement}
        value={props.newMessageText}
      ></textarea>
      <button onClick={addMessage}>Add message</button>
    </div>
  );
};

export default MessageSection;
