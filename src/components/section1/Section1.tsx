import styles from "../../styles/section1/Section1.module.css";
import melodySrc from "../../assets/melody.png";
import fishBoneSrc from "../../assets/fishbone.png";
const Section1 = () => {
  return (
    <div className={styles.Container} id="why-we-need-melodistic">
      <img src={melodySrc} className={styles.Melody} alt="melody" />
      <div className={styles.Content}>
        <div className={styles.Header}>Why We Need Melodistic?</div>
        <div>
          Music has the power to change a person's mood and feelings. Listening
          to music while exercising not only improves the listener's mood but
          also improves the listener’s exercise performance.
        </div>
        <img className={styles.FishBone} src={fishBoneSrc} alt="fish-bone" />
        <div>
          However, finding the right music that fits a current exercise program
          is not easy.
        </div>
      </div>
    </div>
  );
};

export default Section1;
