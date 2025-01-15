export interface AccountStatementCreditorData {
  bmCreditorId: number;
  bmAssetLiabilityId: number;
  creditorName?: string;
  creditorAccountNumber?: string;
  remainingBalance?: number;
  interestRate: number;
  monthlyFees: number;
  originalRepayment: number;
  statusId: number;
  status: string;
  estimatedCompletion: string;
}
