import React from 'react';
import styles from './MessageSection.module.css';
import MessageItem from './MessageItem/MessageItem';

const MessageSection = (props) => {
  let messagesItems = props.data.map((data) => (
    <MessageItem message={data.message} key={data.id} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    let newMessageText = newMessageElement.current.value;
    props.addMessage(newMessageText);
    newMessageElement.current.value = '';
  };

  return (
    <div>
      <div className={styles.messages}>{messagesItems}</div>
      <textarea ref={newMessageElement}></textarea>
      <button onClick={addMessage}>Add message</button>
    </div>
  );
};

export default MessageSection;
