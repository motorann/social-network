import styles from './MessageSection.module.css';
import MessageItem from './MessageItem/MessageItem';

const MessageSection = () => {
  let messagesData = [
    { id: 1, message: "Hello, what's your name?" },
    { id: 2, message: 'I am Katherine' },
    { id: 3, message: 'How are you?' },
    { id: 4, message: 'I am fine' },
  ];

  let messagesItems = messagesData.map((data) => (
    <MessageItem message={data.message} key={data.id} />
  ));

  return <div className={styles.messages}>{messagesItems}</div>;
};

export default MessageSection;
