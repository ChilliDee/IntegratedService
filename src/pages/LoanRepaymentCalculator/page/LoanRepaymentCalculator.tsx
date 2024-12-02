import React, { useState, useMemo } from "react";
import LoanForm from "../components/LoanForm/LoanForm";
import LoanResults from "../components/LoanResults/LoanResults";
import { calculateLoanDetails } from "../utils/calculations";
import styles from "./LoanRepaymentCalculator.module.css";

export default function LoanRepaymentCalculator() {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [interestRate, setInterestRate] = useState(10);
  const [loanTerm, setLoanTerm] = useState(5);
  const [extraPayment, setExtraPayment] = useState(0);

  const loanDetails = useMemo(
    () =>
      calculateLoanDetails(loanAmount, interestRate, loanTerm, extraPayment),
    [loanAmount, interestRate, loanTerm, extraPayment]
  );

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Loan Repayment Calculator</h1>

        <div className={styles.grid}>
          <div className={styles.formColumn}>
            <LoanForm
              loanAmount={loanAmount}
              setLoanAmount={setLoanAmount}
              interestRate={interestRate}
              setInterestRate={setInterestRate}
              loanTerm={loanTerm}
              setLoanTerm={setLoanTerm}
              extraPayment={extraPayment}
              setExtraPayment={setExtraPayment}
            />
          </div>
          <div className={styles.resultsColumn}>
            {loanDetails && <LoanResults {...loanDetails} />}
          </div>
        </div>
      </div>
    </div>
  );
}
