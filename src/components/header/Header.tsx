import Preview from "./Preview";
import styles from "../../styles/header/Header.module.css";
import MenuBar from "./Menubar";
const Header = () => {
  return (
    <div className={styles.Header}>
    <div className={styles.GradientTop}></div>
        <div className={styles.BlackTriangle}></div>
      <div>
        <MenuBar />
        <Preview />
      </div>
    </div>
  );
};

export default Header;
