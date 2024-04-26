import React from "react";
import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink to={"/"}>Users</NavLink>
      <NavLink to={"/profile"}>Profile</NavLink>
    </div>
  );
};

export default Navbar;
