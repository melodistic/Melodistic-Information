import styles from "/src/styles/header/Preview.module.css";

const Preview = () => {
  return (
    <div id="preview" className={styles.PreviewContainer}>
      <img src="images/mobile.webp" alt="preview-mobile" loading="lazy" />
    </div>
  );
};

export default Preview;
