export interface ClientInfo {
  name: string;
  accountNumber: string;
  requiredAmount: number;
  paymentFrequency: string;
  contactNumber: string;
}

export interface DebtSummary {
  totalDebt: number;
  amountPaid: number;
  balanceRemaining: number;
  targetDate: string;
  completionPercentage: number;
}

export interface PaymentSummary {
  monthlyBefore: number;
  monthlyNow: number;
  estimatedCompletion: string;
  currentPayment: number;
  paymentFrequency: string;
  monthlySavingsPercentage: number;
}

export interface CreditorArrangement {
  creditor: string;
  status: string;
  originalDebt: number;
  remainingBalance: number;
  interestBefore?: number;
  interestNow?: number;
  feesBefore?: number;
  feesNow?: number;
  estimatedCompletion: string;
}

export interface Transaction {
  date: string;
  description: string;
  debits: number | null;
  credits: number | null;
  balance: number | null;
  isHistoricalEvent?: boolean;
}

