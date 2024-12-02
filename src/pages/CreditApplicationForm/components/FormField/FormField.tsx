import React, { InputHTMLAttributes } from "react";
import styles from "./FormField.module.css";
import { formatNumber } from "chart.js/helpers";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  prefix?: string;
  showLabelAfterValue?: boolean;
  suffixLabel?: string;
  error?: boolean;
}

export function FormField({
  label,
  prefix,
  showLabelAfterValue,
  suffixLabel,
  error,
  ...props
}: FormFieldProps) {
  return (
    <div className={styles.container}>
      {prefix && (
        <div className={styles.prefix}>
          <span className={styles.prefixText}>{prefix}</span>
        </div>
      )}
      <input
        {...props}
        placeholder={label}
        className={`
          ${styles.input}
          ${error ? styles.inputError : ""}
          ${prefix ? styles.inputWithPrefix : ""} 
          ${showLabelAfterValue && props.value ? styles.inputWithSuffix : ""}
        `}
      />
      {showLabelAfterValue && props.value && (
        <div className={styles.suffix}>
          <span className={styles.suffixText}>{suffixLabel}</span>
        </div>
      )}
      {error && <p className={styles.error}>Required</p>}
    </div>
  );
}
