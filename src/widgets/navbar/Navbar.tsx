import React, { useState } from "react";
import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [module, setModule] = useState(false);

  const openModule = () => {
    setModule(true);
  };

  const closeModule = () => {
    setModule(false);
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_contayner}>
        <NavLink to={"/"} className={styles.nav_logo}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/VK_Full_Logo_%282021-present%29.svg/1280px-VK_Full_Logo_%282021-present%29.svg.png"
            alt=""
          />
        </NavLink>

        <button onClick={openModule}>
          <img
            className={styles.nav_profil_img}
            src="https://sun1-93.userapi.com/impf/DW4IDqvukChyc-WPXmzIot46En40R00idiUAXw/l5w5aIHioYc.jpg?quality=96&as=50x50,100x100,200x200,400x400&sign=10ad7d7953daabb7b0e707fdfb7ebefd&u=sMxW2caWLp1QPhK-jWVUJhAecZdUlsd44UvrOlpCGvQ&cs=200x200"
            alt=""
          />
        </button>
        {module ? (
          <div className={styles.nav_module}>
            <button onClick={closeModule} className={styles.closeModule}>
              X
            </button>
            <div className={styles.nav_module__inner}>
              <NavLink
                onClick={closeModule}
                to={"/profile"}
                className={styles.nav_profil}
              >
                Профиль
              </NavLink>
              <NavLink
                onClick={closeModule}
                to={"/register"}
                className={styles.nav_profil}
              >
                Sign up
              </NavLink>{" "}
              <NavLink
                onClick={closeModule}
                to={"/login"}
                className={styles.nav_profil}
              >
                Sign in
              </NavLink>
              <button className={styles.exit}>Выйти</button>
            </div>
          </div>
        ) : null}
        <div className={styles.overlov} onClick={closeModule}></div>
      </div>
    </div>
  );
};

export default Navbar;
