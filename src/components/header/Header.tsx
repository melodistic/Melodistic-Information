import Preview from "./Preview";
import styles from "/src/styles/header/Header.module.css";

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.GradientTop}></div>
      <div className={styles.BlackTriangle}></div>
      <div>
        <Preview />
      </div>
    </div>
  );
};

export default Header;
