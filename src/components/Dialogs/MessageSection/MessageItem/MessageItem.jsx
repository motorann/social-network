import styles from './MessageItem.module.css';

const MessageItem = (props) => {
  return <div className={styles.message_item}>{props.message}</div>;
};

export default MessageItem;
