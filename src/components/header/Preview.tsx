import previewMobile from "../../assets/mobile.png";
import styles from "../../styles/header/Preview.module.css";
const Preview = () => {
  return (
    <div className={styles.PreviewContainer}>
      <img src={previewMobile} alt="preview-mobile" />
    </div>
  );
};

export default Preview;
