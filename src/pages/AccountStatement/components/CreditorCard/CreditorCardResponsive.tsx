import { useResponsive } from "../../../../sharedHooks/useResponsive";
import { CreditorCardMobile } from "./CreditorCardMobile";
import { CreditorCardLargeMobile } from "./CreditorCardLargeMobile";
import { CreditorCardTablet } from "./CreditorCardTablet";
import { CreditorCardDesktop } from "./CreditorCardDesktop";
import { AccountStatementCreditorData } from "../../types/dto/accountStatementCreditorData";

export const CreditorCardResponsive = (
  creditorData: AccountStatementCreditorData
) => {
  const { isMobile, isTablet, isLargeMobile } = useResponsive();

  return isMobile ? (
    <CreditorCardMobile
      key={creditorData.bmAssetLiabilityId}
      {...creditorData}
    />
  ) : isLargeMobile ? (
    <CreditorCardLargeMobile
      key={creditorData.bmAssetLiabilityId}
      {...creditorData}
    />
  ) : isTablet ? (
    <CreditorCardTablet
      key={creditorData.bmAssetLiabilityId}
      {...creditorData}
    />
  ) : (
    <CreditorCardDesktop
      key={creditorData.bmAssetLiabilityId}
      {...creditorData}
    />
  );
};
