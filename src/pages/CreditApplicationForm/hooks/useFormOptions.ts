import { useQuery } from "react-query";
import { creditApplicationService } from "../api/creditApplication";
import type { AppFormOptions } from "../types/dto/appFormOptionsDTO";

export function useFormOptions() {
  return useQuery<AppFormOptions, Error>(
    "ccformOptions",
    creditApplicationService.getFormOptions,
    {
      staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
      cacheTime: 30 * 60 * 1000, // Keep data in cache for 30 minutes
      retry: 2, // Retry failed requests twice
    }
  );
}
