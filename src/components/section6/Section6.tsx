import styles from "/src/styles/section6/Section6.module.css";

const Section6 = () => {
  return (
    <div className={styles.Container} id="about-us">
        <img src="images/melody.png" className={styles.Melody} alt="melody" />
        <div className={styles.Content}>  
            <div className="header">About Us</div>
            <div className={styles.Member}>
                <img className={styles.Member} src="images/grape.png"/>
                <div className={styles.Name}>Kittiyaporn</div>
                <div className={styles.Lastname}>Takrudthieng</div>
                <div className={styles.Quote}>You can’t be a bad designer if you don’t put your work on</div>
            </div>
            <div className={styles.Member}>
                <img className={styles.Member} src="images/op.png"/>
                <div className={styles.Name}>Kaewket</div>
                <div className={styles.Lastname}>Saelee</div>
                <div className={styles.Quote}>Automation for Jira assigned this issue to you</div>
            </div>
            <div className={styles.Member}>
                <img className={styles.Member} src="images/gop.png"/>
                <div className={styles.Name}>Wisarut </div>
                <div className={styles.Lastname}>Kitticharoenphonngam</div>
                <div className={styles.Quote}>Tests can’t fail, if there aren’t any tests</div>
            </div>
        </div>
        <div className={styles.Gradientbottom}></div>
    </div>
  );
};

export default Section6;
