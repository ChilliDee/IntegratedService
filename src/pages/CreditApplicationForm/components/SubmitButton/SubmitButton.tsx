import React from "react";
import { Spinner } from "../Spinner/Spinner";
import styles from "./SubmitButton.module.css";

interface SubmitButtonProps {
  isSubmitting: boolean;
  disabled?: boolean;
  className?: string;
}

export function SubmitButton({
  isSubmitting,
  disabled = false,
  className = "",
}: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className={`${styles.button} ${className}`}
      disabled={disabled || isSubmitting}
    >
      {isSubmitting ? (
        <>
          <Spinner variant="white" />
          <span className={styles.label}>Submitting...</span>
        </>
      ) : (
        <span className={styles.label}>Submit</span>
      )}
    </button>
  );
}
