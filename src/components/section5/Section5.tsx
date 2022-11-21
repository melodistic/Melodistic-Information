import styles from "/src/styles/section5/Section5.module.css";

const Section5 = () => {
  return (
    <div className={styles.Container} id="melodistic-application">
      <div className={styles.Content}>
        <div className={`${styles.Orange} header`}>Melodistic Application</div>
        <div className={styles.Video}>
          <iframe
            className={styles.YouTubePlayer}
            src="https://www.youtube.com/embed/_suxo34jAcM"
            title="Melodistic"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div>
          A mobile application for streaming exercise music tracks and
          generating new tracks based on mood. It also allows the user to
          include their own favorite music.
        </div>
      </div>
    </div>
  );
};

export default Section5;
