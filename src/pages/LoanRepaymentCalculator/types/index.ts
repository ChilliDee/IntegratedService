export interface LoanDetails {
  monthlyPayment: number;
  totalInterest: number;
  totalPayment: number;
  amortizationSchedule: Array<{
    month: number;
    principalBalance: number;
    interestPaid: number;
  }>;
  actualTermYears: number;
}

export interface LoanFormProps {
  loanAmount: number;
  setLoanAmount: (value: number) => void;
  interestRate: number;
  setInterestRate: (value: number) => void;
  loanTerm: number;
  setLoanTerm: (value: number) => void;
  extraPayment: number;
  setExtraPayment: (value: number) => void;
}