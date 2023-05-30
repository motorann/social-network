import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.data.map((data) => (
    <Post key={data.id} message={data.message} likes={data.likes} />
  ));

  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add New Post</button>
        <button>Remove New Post</button>
      </div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
