import styles from "../../styles/header/Menubar.module.css";
import menuSrc from "../../assets/menu.svg";
const Menubar = () => {
  return (
    <div className={styles.Menubar}>
      <img src={menuSrc} alt="menu" />
    </div>
  );
};

export default Menubar;
