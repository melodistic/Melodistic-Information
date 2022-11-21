import styles from "/src/styles/section1/Section1.module.css";

const Section1 = () => {
  return (
    <div className={styles.Container} id="why-we-need-melodistic">
      <img
        src="images/melody.webp"
        className={styles.Melody}
        alt="melody"
        loading="lazy"
      />
      <div className={styles.Content}>
        <div className="header">Why We Need Melodistic?</div>
        <div>
          Music has the power to change a person's mood and feelings. Listening
          to music while exercising not only improves the listener's mood but
          also improves the listener’s exercise performance.
        </div>
        <img
          className={styles.FishBone}
          src="images/fishbone.webp"
          alt="fish-bone"
          loading="lazy"
        />
        <div>
          However, finding the right music that fits a current exercise program
          is not easy.
        </div>
      </div>
    </div>
  );
};

export default Section1;
