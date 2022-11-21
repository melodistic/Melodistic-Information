import styles from "/src/styles/section4/Section4.module.css";

const Section4 = () => {
  return (
    <div className={styles.Container} id="melodistic-combiner-system">
        <img src="images/melody.png" className={styles.Melody} alt="melody" />
        <div className={styles.Content}>  
            <div className="header">Melodistic Combiner System</div>
            <img
                className={styles.Image}
                src="images/combiner-system.png"
            />
            <div>In Melodistic combiner system, the extracted audio files that use 
                for model training are combined in this system to generate new tracks 
                based on user requirements.
            </div>
            <div className={styles.Header2}>How we combine audio together?</div>
            <img
                className={styles.Image}
                src="images/how-combine.png"
            />
        </div>
    </div>
  );
};

export default Section4;
