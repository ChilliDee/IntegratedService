import { AccountStatementBaseData } from "../../types/dto/accountStatementBaseData";
import { useResponsive } from "../../../../sharedHooks/useResponsive";
import { DebtProgressMobile } from "./DebtProgressMobile";
import { DebtProgressLargeMobile } from "./DebtProgressLargeMobile";
import { DebtProgressTablet } from "./DebtProgressTablet";
import { DebtProgressDesktop } from "./DebtProgressDesktop";

export const DebtProgressResponsive = (baseData: AccountStatementBaseData) => {
  const { isMobile, isTablet, isLargeMobile } = useResponsive();

  return isMobile ? (
    <DebtProgressMobile {...baseData} />
  ) : isLargeMobile ? (
    <DebtProgressLargeMobile {...baseData} />
  ) : isTablet ? (
    <DebtProgressTablet {...baseData} />
  ) : (
    <DebtProgressDesktop {...baseData} />
  );
};
