import { AccountStatementBaseData } from "../../types/dto/accountStatementBaseData";
import { useResponsive } from "../../../../sharedHooks/useResponsive";
import { CreditorArrangementsMobile } from "./CreditorArrangementsMobile";
import { CreditorArrangementsLargeMobile } from "./CreditorArrangementsLargeMobile";
import { CreditorArrangementsTablet } from "./CreditorArrangementsTablet";
import { CreditorArrangementsDesktop } from "./CreditorArrangementsDesktop";

export const CreditorArrangementsResponsive = (
  baseData: AccountStatementBaseData
) => {
  const { isMobile, isTablet, isLargeMobile } = useResponsive();

  return isMobile ? (
    <CreditorArrangementsMobile {...baseData} />
  ) : isLargeMobile ? (
    <CreditorArrangementsLargeMobile {...baseData} />
  ) : isTablet ? (
    <CreditorArrangementsTablet {...baseData} />
  ) : (
    <CreditorArrangementsDesktop {...baseData} />
  );
};
