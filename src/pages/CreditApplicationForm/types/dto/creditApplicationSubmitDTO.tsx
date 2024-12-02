export interface CreditApplicationSubmitDTO {
  primaryConcern: number;
  goalAfterCreditRepair: number;
  otherGoal?: string;
  firstName: string;
  email: string;
  mobile: string;
  postCode: string;
}
