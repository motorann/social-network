import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let postsData = [
    { id: 1, message: 'kek1', likes: 15 },
    { id: 2, message: 'kek2', likes: 5 },
    { id: 3, message: 'kek3', likes: 3 },
    { id: 4, message: 'kek4', likes: 12 },
    { id: 5, message: 'kek5', likes: 9 },
  ];

  let postsElements = postsData.map((data) => (
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
