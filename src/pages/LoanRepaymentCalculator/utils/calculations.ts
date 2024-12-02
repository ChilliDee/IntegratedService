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

export function calculateLoanDetails(
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