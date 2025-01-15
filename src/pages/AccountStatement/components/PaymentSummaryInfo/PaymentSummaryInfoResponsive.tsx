import { useResponsive } from "../../../../sharedHooks/useResponsive";
import { AccountStatementBaseData } from "../../types/dto/accountStatementBaseData";
import { PaymentSummaryInfoDesktop } from "./PaymentSummaryInfoDekstop";
import { PaymentSummaryInfoLargeMobile } from "./PaymentSummaryInfoLargeMobile";
import { PaymentSummaryInfoMobile } from "./PaymentSummaryInfoMobile";
import { PaymentSummaryInfoTablet } from "./PaymentSummaryInfoTablet";

export const PaymentSummaryInfoResponsive = (
  baseData: AccountStatementBaseData
) => {
  const { isMobile, isTablet, isLargeMobile } = useResponsive();

  return isMobile ? (
    <PaymentSummaryInfoMobile {...baseData} />
  ) : isLargeMobile ? (
    <PaymentSummaryInfoLargeMobile {...baseData} />
  ) : isTablet ? (
    <PaymentSummaryInfoTablet {...baseData} />
  ) : (
    <PaymentSummaryInfoDesktop {...baseData} />
  );
};
