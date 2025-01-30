import axios from "axios";
import type { AccountStatementBaseData } from "../types/dto/accountStatementBaseData";
import { QueryStringParameterSelector } from "../utilities/queryStringParameterSelector";

var queryStringParameterSelector = new QueryStringParameterSelector();
queryStringParameterSelector.ExtractGuidParamType();
queryStringParameterSelector.ExtractPreviewParamType();
queryStringParameterSelector.GenerateQueryStringParam();
var queryString: string = queryStringParameterSelector.queryStringParameter;

const API_BASE_URL = import.meta.env.VITE_ACCOUNT_STATEMENT_BASE_URL;

export const accountStatementService = {
  async getAccountStatementDataAsync(): Promise<AccountStatementBaseData> {
    const response = await axios.get<AccountStatementBaseData>(
      `${API_BASE_URL}/api/accountstatement/accountstatementview${queryString}`
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
