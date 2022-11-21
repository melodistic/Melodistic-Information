import styles from "/src/styles/section3/Section3.module.css";

const Section3 = () => {
  return (
    <div className={styles.Container} id="melodistic-processor-system">
      <div className={styles.Content}>
        <div className="header">Melodistic Processor System</div>
        <img
          className={styles.Image}
          src="images/processor-system.webp"
          alt="processor-sytem"
          loading="lazy"
        />
        <div>
          To include users’ favorite music in generated track, we must process
          their music with Melodistic processor system. The first part of the
          system is used for getting user audio files from the user. The second
          part of system is preprocess audio file to contain only instrumental
          audio, extract bpm, randomly split into 20 sub-files, and transformed
          them into spectrogram images. The last part of the system uses a music
          mood classification system to predict each spectrogram image and find
          majority of mood.
        </div>
      </div>
    </div>
  );
};

export default Section3;
