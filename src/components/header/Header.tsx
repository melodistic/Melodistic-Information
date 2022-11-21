import Section1 from "../section1/Section1";
import Preview from "./Preview";
import styles from "/src/styles/header/Header.module.css";

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.GradientTop}></div>
      <div className={styles.BlackTriangle}></div>
      <div className={styles.Content}>
        <Preview />
        <Section1 />
      </div>
    </div>
  );
};

export default Header;
