import React from "react";
import { CheckCircle } from "lucide-react";
import styles from "./SuccessMessage.module.css";

export function SuccessMessage() {
  return (
    <div className={styles.container}>
      <CheckCircle className={styles.icon} />
      <h2 className={styles.title}>Application Submitted!</h2>
      <p className={styles.message}>
        Thank you for your application. Our team will review your information
        and contact you shortly.
      </p>
    </div>
  );
}
