import styles from "./NavMenu.module.scss";
import { useNavigate } from "react-router";

const NavMenu = () => {
  const navigate = useNavigate();

  const handleClickNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <nav className={styles.menu}>
      <ul className={styles["menu__list"]}>
        <li
          className={styles["menu__list-item"]}
          onClick={() => handleClickNavigate("/")}
        >
          MainPage
        </li>
        <li
          className={styles["menu__list-item"]}
          onClick={() => handleClickNavigate("counter")}
        >
          Counter page
        </li>
        <li className={styles["menu__list-item"]}>Страница 2</li>
      </ul>
    </nav>
  );
};

export default NavMenu;
