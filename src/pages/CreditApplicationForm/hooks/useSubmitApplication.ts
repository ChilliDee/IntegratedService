import { useMutation } from 'react-query';
import { creditApplicationService } from '../api/creditApplication';
import type { CreditApplicationSubmitDTO } from '../types/dto/creditApplicationSubmitDTO';

export function useSubmitApplication() {
  return useMutation((data: CreditApplicationSubmitDTO) => 
    creditApplicationService.submitApplication(data)
  );
}