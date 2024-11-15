import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

interface LoanFormProps {
  loanAmount: number;
  setLoanAmount: (value: number) => void;
  interestRate: number;
  setInterestRate: (value: number) => void;
  loanTerm: number;
  setLoanTerm: (value: number) => void;
  extraPayment: number;
  setExtraPayment: (value: number) => void;
}

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
    // Remove any non-digit characters
    const cleanValue = value.replace(/[^\d]/g, '');
    
    // Convert to number
    const numValue = Number(cleanValue);
    
    if (cleanValue === '') {
      setLoanAmountInput('');
      setLoanAmount(0);
    } else if (!isNaN(numValue) && numValue >= 0) {
      // Format with commas
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
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="w-5 h-5 text-[#218C43]" />
        <h2 className="text-xl text-gray-800 font-bold font-sans">Loan Details</h2>
      </div>

      <div className="space-y-5">
        <div>
          <label htmlFor="loanAmount" className="block text-sm text-gray-600 font-bold mb-2">
            Loan Amount ($)
          </label>
          <input
            type="text"
            id="loanAmount"
            value={loanAmountInput}
            onChange={(e) => handleLoanAmountChange(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-colors"
            min="100"
            step="100"
          />
        </div>

        <div>
          <label htmlFor="interestRate" className="block text-sm text-gray-600 font-bold mb-2">
            Interest Rate (%)
          </label>
          <input
            type="number"
            id="interestRate"
            value={interestRate || ''}
            onChange={(e) => handleInputChange(e.target.value, setInterestRate)}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-colors"
            min="0"
            step="0.1"
          />
        </div>

        <div>
          <label htmlFor="loanTerm" className="block text-sm text-gray-600 font-bold mb-2">
            Loan Term (years)
          </label>
          <input
            type="number"
            id="loanTerm"
            value={loanTermInput}
            onChange={(e) => handleLoanTermChange(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-colors"
            min="0.5"
            step="0.5"
          />
        </div>

        <div>
          <label htmlFor="extraPayment" className="block text-sm text-gray-600 mb-2">
            <span className="font-bold">Extra Monthly Payment ($)</span> <span className="font-medium text-gray-600 italic">- if applicable</span>
          </label>
          <input
            type="number"
            id="extraPayment"
            value={extraPayment || ''}
            onChange={(e) => handleInputChange(e.target.value, setExtraPayment)}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-colors"
            min="0"
            step="10"
          />
        </div>
      </div>
    </div>
  );
}