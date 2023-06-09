import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/state';

const MyPosts = (props) => {
  //console.log(props);
  let postsElements = props.posts.map((data) => (
    <Post key={data.id} message={data.message} likes={data.likes} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    /* props.addPost(); */
    props.dispatch(addPostActionCreator());
  };

  let changePostText = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    /*  props.updateNewPostText(text); */
    props.dispatch(action);
  };

  return (
    <div>
      My posts
      <div>
        <textarea
          ref={newPostElement}
          onChange={changePostText}
          value={props.newPostText}
        />
        <button onClick={addPost}>Add New Post</button>
        <button>Remove New Post</button>
      </div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
