import styles from "./scss/navigation.module.scss";

interface NavigationProps{
  isDarkMode: boolean,
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Navigation({isDarkMode, setDarkMode}: NavigationProps) {

  const darkModeSwitch = () => {setDarkMode(!isDarkMode)}

  return (
    <header className={styles.header}>
      <div className={styles.flexbox}>
        <img src={"logo.svg"} alt="Logo" className={styles.logo} />
        <div
          className={styles.lightdarkmode}
          onClick={darkModeSwitch}
          style={{ cursor: "pointer" }}
        >
          <img
            src={isDarkMode ?"icon-moon.svg" : "icon-sun.svg" }
            className={styles.sunmoon}
          />
        </div>
      </div>
    </header>
  );
}
 