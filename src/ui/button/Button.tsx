import React, { FC } from "react";
import styles from "./button.module.css";
interface IButton {
  label?: string;
}

const Button: FC<IButton> = ({ label }) => {
  return <button className={styles.button}>{label}</button>;
};

export default Button;
