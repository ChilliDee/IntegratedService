import { useQuery } from "react-query";
import { accountStatementService } from "../api/accountStatement";
import type { AccountStatementBaseData } from "../types/dto/accountStatementBaseData";

export function useAccountStatementData() {
  return useQuery<AccountStatementBaseData, Error>(
    "accountStatementData",
    accountStatementService.getAccountStatementDataAsync
  );
}
