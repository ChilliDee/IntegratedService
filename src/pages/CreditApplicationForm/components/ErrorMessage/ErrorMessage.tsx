import { XCircle } from "lucide-react";
import styles from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  onRetry: () => void;
}

export function ErrorMessage({ onRetry }: ErrorMessageProps) {
  return (
    <div className={styles.container}>
      <XCircle className={styles.icon} />
      <h2 className={styles.title}>Submission Failed</h2>
      <p className={styles.message}>
        There was en error submitting the form, Please contact Clean Credit on
        ......
      </p>
      <button onClick={onRetry} className={styles.button}>
        Try Again
      </button>
    </div>
  );
}
