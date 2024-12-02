import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { LoanFormProps } from '../../types';
import styles from './LoanForm.module.css';

export default function LoanForm({
  loanAmount,
  setLoanAmount,
  interestRate,
  setInterestRate,
  loanTerm,
  setLoanTerm,
  extraPayment,
  setExtraPayment,
}: LoanFormProps) {
  const [loanAmountInput, setLoanAmountInput] = useState(loanAmount.toLocaleString());
  const [loanTermInput, setLoanTermInput] = useState(loanTerm.toString());

  const handleLoanAmountChange = (value: string) => {
    const cleanValue = value.replace(/[^\d]/g, '');
    const numValue = Number(cleanValue);
    
    if (cleanValue === '') {
      setLoanAmountInput('');
      setLoanAmount(0);
    } else if (!isNaN(numValue) && numValue >= 0) {
      const formattedValue = numValue.toLocaleString();
      setLoanAmountInput(formattedValue);
      setLoanAmount(numValue);
    }
  };

  const handleLoanTermChange = (value: string) => {
    setLoanTermInput(value);
    const numValue = parseFloat(value);
    if (value === '' || isNaN(numValue)) {
      setLoanTerm(0);
    } else if (numValue >= 0.5) {
      setLoanTerm(numValue);
    }
  };

  const handleInputChange = (
    value: string,
    setter: (value: number) => void,
    min: number = 0
  ) => {
    const numValue = value === '' ? '' : Number(value);
    if (numValue === '') {
      setter(0);
    } else if (!isNaN(numValue) && numValue >= min) {
      setter(numValue);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Calculator className={styles.headerIcon} />
        <h2 className={styles.headerTitle}>Loan Details</h2>
      </div>

      <div className={styles.formFields}>
        <div>
          <label htmlFor="loanAmount" className={styles.label}>
            Loan Amount ($)
          </label>
          <input
            type="text"
            id="loanAmount"
            value={loanAmountInput}
            onChange={(e) => handleLoanAmountChange(e.target.value)}
            className={styles.input}
            min="100"
            step="100"
          />
        </div>

        <div>
          <label htmlFor="interestRate" className={styles.label}>
            Interest Rate (%)
          </label>
          <input
            type="number"
            id="interestRate"
            value={interestRate || ''}
            onChange={(e) => handleInputChange(e.target.value, setInterestRate)}
            className={styles.input}
            min="0"
            step="0.1"
          />
        </div>

        <div>
          <label htmlFor="loanTerm" className={styles.label}>
            Loan Term (years)
          </label>
          <input
            type="number"
            id="loanTerm"
            value={loanTermInput}
            onChange={(e) => handleLoanTermChange(e.target.value)}
            className={styles.input}
            min="0.5"
            step="0.5"
          />
        </div>

        <div>
          <label htmlFor="extraPayment" className={styles.label}>
            <span>Extra Monthly Payment ($)</span>{' '}
            <span className={styles.labelOptional}>- if applicable</span>
          </label>
          <input
            type="number"
            id="extraPayment"
            value={extraPayment || ''}
            onChange={(e) => handleInputChange(e.target.value, setExtraPayment)}
            className={styles.input}
            min="0"
            step="10"
          />
        </div>
      </div>
    </div>
  );
}