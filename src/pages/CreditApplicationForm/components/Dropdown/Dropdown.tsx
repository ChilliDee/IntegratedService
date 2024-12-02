import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./Dropdown.module.css";
import { AppFormOption } from "../../types/dto/appFormOptionDTO";

interface DropdownProps {
  options: AppFormOption[];
  value: AppFormOption;
  onChange: (appFormOption: AppFormOption) => void;
  onBlur?: () => void;
  label: string;
  error?: boolean;
}

export function Dropdown({
  options,
  value,
  onChange,
  onBlur,
  label,
  error,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => {
          onBlur?.();
          setTimeout(() => setIsOpen(false), 200);
        }}
        className={`${styles.button} ${error ? styles.buttonError : ""}`}
      >
        <span className={value ? styles.labelSelected : styles.label}>
          {value.name || label}
        </span>
        <ChevronDown
          className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}
        />
      </button>

      {error && <p className={styles.error}>Required</p>}

      {isOpen && (
        <div className={styles.dropdown}>
          {options.map((option) => (
            <button
              type="button"
              key={option.id}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className={`${styles.option} ${
                option.id === value.id ? styles.optionSelected : ""
              }`}
            >
              {option.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
