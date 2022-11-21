import styles from "/src/styles/section4/Section4.module.css";

const Section4 = () => {
  return (
    <div className={styles.Container} id="melodistic-combiner-system">
      <img
        src="images/melody.webp"
        className={styles.Melody}
        alt="melody"
        loading="lazy"
      />
      <div className={styles.Content}>
        <div className="header">Melodistic Combiner System</div>
        <img
          className={styles.Image}
          src="images/combiner-system.webp"
          alt="combiner-system"
          loading="lazy"
        />
        <div>
          In Melodistic combiner system, the extracted audio files that use for
          model training are combined in this system to generate new tracks
          based on user requirements.
        </div>
        <div className={styles.Header2}>How do we combine audio together?</div>
        <img
          className={styles.Image}
          src="images/how-combine.webp"
          alt="how-combine-audio"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Section4;
