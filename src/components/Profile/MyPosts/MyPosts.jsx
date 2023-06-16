import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/profileReducer';

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post key={post.id} message={post.message} likes={post.likes} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    //props.dispatch(addPostActionCreator());
    props.addPost();
  };

  let onChangePostText = () => {
    let text = newPostElement.current.value;
    //let action = updateNewPostTextActionCreator(text);
    /*  props.updateNewPostText(text); */
    // props.dispatch(action);
    props.updateNewPostText(text);
  };

  return (
    <div>
      My posts
      <div>
        <textarea
          ref={newPostElement}
          onChange={onChangePostText}
          value={props.newPostText}
        />
        <button onClick={onAddPost}>Add New Post</button>
        <button>Remove New Post</button>
      </div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
