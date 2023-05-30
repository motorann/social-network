import AboutMeInfo from './AboutMeInfo/AboutMeInfo';
import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';

const Profile = (props) => {
  return (
    <div>
      <AboutMeInfo />
      <MyPosts data={props.postsData} />
    </div>
  );
};

export default Profile;
