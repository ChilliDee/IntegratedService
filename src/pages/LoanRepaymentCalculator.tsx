import React, { useState, useMemo } from "react";
import LoanForm from "../components/LoanForm";
import LoanResults from "../components/LoanResults";
import "@iframe-resizer/child";

interface LoanDetails {
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

function calculateLoanDetails(
  loanAmount: number,
  interestRate: number,
  loanTerm: number,
  extraPayment: number
): LoanDetails | null {
  if (!loanAmount || !interestRate || !loanTerm) return null;

  const monthlyRate = interestRate / 100 / 12;
  const totalMonths = Math.floor(loanTerm * 12);
  const monthlyPayment =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1);

  let remainingBalance = loanAmount;
  let totalInterest = 0;
  const amortizationSchedule = [
    {
      month: 0,
      principalBalance: loanAmount,
      interestPaid: 0,
    },
  ];

  for (let month = 1; month <= totalMonths; month++) {
    const interestPayment = remainingBalance * monthlyRate;
    const principalPayment = Math.min(
      monthlyPayment + extraPayment - interestPayment,
      remainingBalance
    );

    totalInterest += interestPayment;
    remainingBalance = Math.max(0, remainingBalance - principalPayment);

    amortizationSchedule.push({
      month,
      principalBalance: remainingBalance,
      interestPaid: totalInterest,
    });

    if (remainingBalance === 0) break;
  }

  const actualMonths =
    amortizationSchedule[amortizationSchedule.length - 1].month;

  return {
    monthlyPayment: monthlyPayment + extraPayment,
    totalInterest,
    totalPayment: loanAmount + totalInterest,
    amortizationSchedule,
    actualTermYears: actualMonths / 12,
  };
}

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
    <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#074424] text-center mb-8 font-unbounded">
          Loan Repayment Calculator
        </h1>

        <div className="lg:grid lg:grid-cols-12 lg:gap-8 space-y-6 lg:space-y-0">
          <div className="lg:col-span-4">
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
          <div className="lg:col-span-8">
            {loanDetails && <LoanResults {...loanDetails} />}
          </div>
        </div>
      </div>
    </div>
  );
}
