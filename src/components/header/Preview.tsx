import styles from "/src/styles/header/Preview.module.css";

const Preview = () => {
  return (
    <div id="preview" className={styles.PreviewContainer}>
      <img src="images/mobile.png" alt="preview-mobile" />
    </div>
  );
};

export default Preview;
