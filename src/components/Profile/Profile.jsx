import AboutMeInfo from './AboutMeInfo/AboutMeInfo';
import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';

const Profile = (props) => {
  return (
    <div>
      <AboutMeInfo />
      <MyPosts
        posts={props.stateProfile.posts}
        addPost={props.addPost}
        newPostText={props.stateProfile.newPostText}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};

export default Profile;
