import { useEffect, useState } from "react";
import styles from "./scss/navigation.module.scss";

export default function Navigation() {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else document.body.classList.remove("dark");
  }, [isDarkMode]);

  const darkModeSwitch = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <header className={styles.header}>
      <div className={styles.flexbox}>
        <img
          src={isDarkMode ? "logolight.svg" : "logodark.svg"}
          alt="Logo"
          className={styles.logo}
        />
        <div
          className={styles.lightdarkmode}
          onClick={darkModeSwitch}
          style={{ cursor: "pointer" }}
        >
          <img
            src={isDarkMode ? "icon-moon.svg" : "icon-sun.svg"}
            className={styles.sunmoon}
          />
        </div>
      </div>
    </header>
  );
}
