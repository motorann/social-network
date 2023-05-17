import AboutMeInfo from './AboutMeInfo/AboutMeInfo';
import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <AboutMeInfo />
      <MyPosts />
    </div>
  );
};

export default Profile;
