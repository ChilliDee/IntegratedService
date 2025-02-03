import { AccountStatementTransactionData } from "./accountStatementTransactionData";
import { AccountStatementCreditorData } from "./accountStatementCreditorData";

export interface AccountStatementBaseData {
  applicantFullName: string;
  formattedAddress: string;
  applicantId: number;
  paymentsToJbAmount: number;
  paymentsToJbFrequency: string;
  estimatedCompletionDate: string;
  totalAmountOfDebt: number;
  totalAmountPaidSoFar: number;
  progress: number;
  totalAmountRemaining: number;
  managementFeePercentage: number;
  monthlyAdminFee: number | undefined;
  creditorData: Array<AccountStatementCreditorData>;
  transactionData: Array<AccountStatementTransactionData>;
}
