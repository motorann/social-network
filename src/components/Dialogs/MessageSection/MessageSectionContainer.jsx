import React from 'react';
//import styles from './MessageSection.module.css';
//import MessageItem from './MessageItem/MessageItem';
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../../redux/dialogsReducer';
import MessageSection from './MessageSection';

const MessageSectionContainer = (props) => {
  let state = props.store.getState();
  /* let messagesItems = props.stateMessages.map((data) => (
    <MessageItem message={data.message} key={data.id} />
  )); */

  // let newMessageElement = React.createRef();

  let addMessage = () => {
    //props.addMessage();
    props.store.dispatch(addMessageActionCreator());
  };

  let updateNewMessageText = (currentText) => {
    // let currentText = newMessageElement.current.value;
    // props.updateNewMessageText(currentText);
    let action = updateNewMessageTextActionCreator(currentText);
    props.store.dispatch(action);
  };

  return (
    <MessageSection
      addMessage={addMessage}
      updateNewMessageText={updateNewMessageText}
      newMessageText={state.DialogsPage.newMessageText}
      messages={state.DialogsPage.messages}
    />
  );
};

export default MessageSectionContainer;
