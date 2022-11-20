import arrowUpSrc from "../../assets/arrow-up.svg";
import styles from "../../styles/header/ToTop.module.css";

const ToTop = () => {
  const goToTop = () => {
    const element = document.getElementById("preview");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <div className={styles.ToTop} onClick={goToTop}>
      <img src={arrowUpSrc} alt="arrow-up" />
    </div>
  );
};

export default ToTop;
