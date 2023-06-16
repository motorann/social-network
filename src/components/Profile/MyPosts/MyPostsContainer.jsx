import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  /*  let postsElements = props.posts.map((data) => (
    <Post key={data.id} message={data.message} likes={data.likes} />
  )); */

  // let newPostElement = React.createRef();

  let addPost = () => {
    /* props.addPost(); */
    props.store.dispatch(addPostActionCreator());
  };

  let updateNewPostText = (text) => {
    //let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    /*  props.updateNewPostText(text); */
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
      addPost={addPost}
      updateNewPostText={updateNewPostText}
    />
  );
};

export default MyPostsContainer;
