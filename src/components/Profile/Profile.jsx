import AboutMeInfo from './AboutMeInfo/AboutMeInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import styles from './Profile.module.css';

const Profile = (props) => {
  return (
    <div>
      <AboutMeInfo />
      <MyPostsContainer
        // posts={props.stateProfile.posts}
        /* addPost={props.addPost} */
        // newPostText={props.stateProfile.newPostText}
        /* updateNewPostText={props.updateNewPostText} */
        // dispatch={props.dispatch}
        store={props.store}
      />
    </div>
  );
};

export default Profile;
