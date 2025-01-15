export interface AccountStatementTransactionData {
  id?: number;
  transactionDate?: string;
  transactionTypeId: number;
  description?: string;
  debitAmount?: number;
  creditAmount?: number;
  balance?: number;
  transactionId: number;
}
