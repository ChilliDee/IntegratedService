import { useQuery } from "react-query";
import { accountStatementService } from "../api/accountStatement";
import type { AccountStatementBaseData } from "../types/dto/accountStatementBaseData";
import { useQueryParams } from "../../../sharedHooks/useQueryParams";

export function useAccountStatementData() {
  return useQuery<AccountStatementBaseData, Error>(
    "accountStatementData",
    accountStatementService.getAccountStatementDataAsync
  );
}
