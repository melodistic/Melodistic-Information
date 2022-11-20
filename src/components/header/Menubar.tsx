import styles from "/src/styles/header/Menubar.module.css";
import menuSrc from "/src/assets/menu.svg";

const Menubar = () => {
  return (
    <div className={styles.Menubar}>
      <img src={menuSrc} alt="menu" />
    </div>
  );
};

export default Menubar;
