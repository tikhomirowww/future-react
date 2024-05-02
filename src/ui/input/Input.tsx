import React, { ChangeEvent, FC } from "react";
import styles from "./input.module.css";

interface IInput {
  label?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  type?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
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
      <span className={styles.labelName}>{label && `${label}:`}</span>
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
