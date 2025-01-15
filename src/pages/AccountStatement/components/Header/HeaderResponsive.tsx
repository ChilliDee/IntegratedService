import { useResponsive } from "../../../../sharedHooks/useResponsive";
import { AccountStatementBaseData } from "../../types/dto/accountStatementBaseData";
import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderLargeMobile } from "./HeaderLargeMobile";
import { HeaderMobile } from "./HeaderMobile";
import { HeaderTablet } from "./HeaderTablet";

export const HeaderResponsive = (baseData: AccountStatementBaseData) => {
  const { isMobile, isTablet, isLargeMobile } = useResponsive();

  return isMobile ? (
    <HeaderMobile {...baseData} />
  ) : isLargeMobile ? (
    <HeaderLargeMobile {...baseData} />
  ) : isTablet ? (
    <HeaderTablet {...baseData} />
  ) : (
    <HeaderDesktop {...baseData} />
  );
};
