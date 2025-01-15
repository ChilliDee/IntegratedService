import axios from "axios";
import type { AppFormOptions } from "../types/dto/appFormOptionsDTO";
import type { CreditApplicationSubmitDTO } from "../types/dto/creditApplicationSubmitDTO";

const API_BASE_URL = import.meta.env.VITE_CC_APP_FORM_API;

export const creditApplicationService = {
  async getFormOptions(): Promise<AppFormOptions> {
    try {
      const response = await axios.get<AppFormOptions>(
        `api.webappform.com.au/api/CcAppForm/options`
      );
      return response.data;
    } catch (error) {
      // Create a plain object with only the necessary error information
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";
      throw new Error(errorMessage);
    }
  },

  async submitApplication(data: CreditApplicationSubmitDTO): Promise<void> {
    try {
      await axios.post(`${API_BASE_URL}/api/CcAppForm/submit`, data);
    } catch (error) {
      throw new Error();
    }
  },
};
