import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../helpers/consts";
import { getCurrentUser, getUsers } from "../../store/actions/users.actions";
import { logout } from "../../store/slices/users.slices";
import Input from "../../ui/input/Input";

const Navbar = () => {
  const [module, setModule] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const id = localStorage.getItem("currentUser");
    {
      id && dispatch(getCurrentUser(id));
    }
  }, []);

  const { currentUser } = useAppSelector((state) => state.users);

  const openModule = () => {
    setModule(true);
  };

  const closeModule = () => {
    setModule(false);
  };
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    setSearchParams({ q: search });
    dispatch(getUsers());
  }, [search]);

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_contayner}>
        <div className={styles.navbar_l}>
          <NavLink to={"/"} className={styles.nav_logo}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/VK_Full_Logo_%282021-present%29.svg/1280px-VK_Full_Logo_%282021-present%29.svg.png"
              alt=""
            />
          </NavLink>

          <Input
            value={search}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
            placeholder="Search"
          />
        </div>

        <div className={styles.navbar_r}>
          {currentUser && (
            <Link to={"/profile"} className={styles.user_name}>
              {currentUser.name}
            </Link>
          )}
          <button onClick={openModule}>
            <img
              className={styles.nav_profil_img}
              src={
                currentUser?.avatar ||
                "https://sun1-93.userapi.com/impf/DW4IDqvukChyc-WPXmzIot46En40R00idiUAXw/l5w5aIHioYc.jpg?quality=96&as=50x50,100x100,200x200,400x400&sign=10ad7d7953daabb7b0e707fdfb7ebefd&u=sMxW2caWLp1QPhK-jWVUJhAecZdUlsd44UvrOlpCGvQ&cs=200x200"
              }
              alt=""
            />
          </button>
        </div>
        {module ? (
          <div className={styles.nav_module}>
            <button onClick={closeModule} className={styles.closeModule}>
              X
            </button>
            <div className={styles.nav_module__inner}>
              {!currentUser && (
                <div>
                  <div>
                    {" "}
                    <NavLink
                      onClick={closeModule}
                      to={"/register"}
                      className={styles.nav_profil}
                    >
                      Sign up
                    </NavLink>{" "}
                  </div>
                  <div>
                    {" "}
                    <NavLink
                      onClick={closeModule}
                      to={"/login"}
                      className={styles.nav_profil}
                    >
                      Sign in
                    </NavLink>
                  </div>
                </div>
              )}
              {currentUser && (
                <button
                  onClick={() => {
                    dispatch(logout());
                    closeModule();
                  }}
                  className={styles.exit}
                >
                  Выйти
                </button>
              )}
            </div>
          </div>
        ) : null}
        <div className={styles.overlov} onClick={closeModule}></div>
      </div>
    </div>
  );
};

export default Navbar;
