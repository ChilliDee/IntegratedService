import axios from "axios";
import type { AppFormOptions } from "../types/dto/appFormOptionsDTO";
import type { CreditApplicationSubmitDTO } from "../types/dto/creditApplicationSubmitDTO";
import type { ApiResponseDTO } from "../types/dto/apiResponseDTO";
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://localhost:7039";

export const creditApplicationService = {
  async getFormOptions(): Promise<AppFormOptions> {
    try {
      const response = await axios.get<AppFormOptions>(
        `${API_BASE_URL}/api/CcAppForm/get-cc-app-form-options`
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
      await axios.post(
        `${API_BASE_URL}/api/CcAppForm/submit-cc-app-form`,
        data
      );
    } catch (error) {
      throw new Error();
    }
  },
};
