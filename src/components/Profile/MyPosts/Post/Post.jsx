import styles from './Post.module.css';

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img
        src="https://steamuserimages-a.akamaihd.net/ugc/919016233019551152/50813DDCAE6E37EF9C4BCEF52672AA97F80DA995/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
        alt="kek"
      />
      <p>{props.message}</p>
      <p>{props.likes} is liked this post</p>
    </div>
  );
};

export default Post;
