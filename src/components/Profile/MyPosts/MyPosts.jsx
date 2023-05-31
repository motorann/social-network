import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.data.map((data) => (
    <Post key={data.id} message={data.message} likes={data.likes} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let newPostMessage = newPostElement.current.value;
    props.addPost(newPostMessage);
    newPostElement.current.value = '';
  };

  return (
    <div>
      My posts
      <div>
        <textarea ref={newPostElement}></textarea>
        <button onClick={addPost}>Add New Post</button>
        <button>Remove New Post</button>
      </div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
