import React, { FC } from "react";
import styles from "./button.module.css";
interface IButton {
  children?: string;
}

const Button: FC<IButton> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
