import axios from "axios";
import type { AccountStatementBaseData } from "../types/dto/accountStatementBaseData";
import { useQueryParams } from "../../../sharedHooks/useQueryParams";

const API_BASE_URL = import.meta.env.VITE_ACCOUNT_STATEMENT_BASE_URL;

export const accountStatementService = {
  async getAccountStatementDataAsync(): Promise<AccountStatementBaseData> {
    const queryParams = useQueryParams();
    const applicantId = queryParams.get("applicantId");

    const response = await axios.get<AccountStatementBaseData>(
      `${API_BASE_URL}/api/AccountStatement?applicantId=${applicantId}`
    );
    return response.data;

    // try {
    //   const response = await axios.get<AccountStatementBaseData>(
    //     `${API_BASE_URL}/api/AccountStatement?applicantId=3845`
    //   );
    //   return response.data;
    // } catch (error) {
    //   throw new Error();
    // }
  },
};
