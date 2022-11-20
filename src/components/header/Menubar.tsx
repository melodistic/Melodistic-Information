import styles from "/src/styles/header/Menubar.module.css";
import menuSrc from "/src/assets/menu.svg";
import { useState } from "react";

interface MenuItem {
  id: string;
  name: string;
}
const Menubar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const goTo = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const menuList: Array<MenuItem> = [
    {
      id: "why-we-need-melodistic",
      name: "Why we need melodistic?",
    },
    {
      id: "how-do-we-classify-mood-of-music",
      name: "How do we classify mood of music?",
    },
    {
      id: "melodistic-processor-system",
      name: "Melodistic Processor System",
    },
    {
      id: "melodistic-combiner-system",
      name: "Melodistic Combiner System",
    },
    {
      id: "melodistic-application",
      name: "Melodistic Application",
    },
    {
      id: "about-us",
      name: "About Us",
    },
  ];
  return (
    <div>
      {menuOpen && (
        <div className={styles.Menu}>
          {menuList.map((item) => (
            <div onClick={() => goTo(item.id)}>{item.name}</div>
          ))}
        </div>
      )}
      <div className={styles.Menubar}>
        <img src={menuSrc} alt="menu" onClick={() => setMenuOpen(!menuOpen)} />
      </div>
    </div>
  );
};

export default Menubar;
