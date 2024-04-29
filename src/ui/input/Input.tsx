import React, { FC } from "react";
import styles from "./input.module.css";

interface IInput {
  label?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  type?: string;
  onChange?: () => void;
}

const Input: FC<IInput> = ({
  label,
  name,
  onChange,
  value,
  placeholder,
  type = "text",
}) => {
  return (
    <label className={styles.label}>
      {label && `${label}:`}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Input;
