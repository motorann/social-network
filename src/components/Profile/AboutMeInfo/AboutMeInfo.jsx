import styles from './AboutMeInfo.module.css';

const AboutMeInfo = () => {
  return (
    <div>
      <div className={styles.content_img}>
        <img src="https://images.unsplash.com/photo-1613327986042-63d4425a1a5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMHB1cnBsZXxlbnwwfHwwfHw%3D&w=1000&q=80" />
      </div>
      <div>ava+description</div>
    </div>
  );
};

export default AboutMeInfo;
