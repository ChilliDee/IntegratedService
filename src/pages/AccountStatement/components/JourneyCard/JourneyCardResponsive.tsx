import { useResponsive } from "../../../../sharedHooks/useResponsive";
import { JourneyCardMobile } from "./JourneyCardMobile";
import { JourneyCardDesktop } from "./JourneyCardDesktop";
import { JourneyCardTablet } from "./JourneyCardTablet";
import { JourneyCardProps } from "../../types/props/journeyCardProps";
import { JourneyCardLargeMobile } from "./JourneyCardLargeMobile";

export const JourneyCardResponsive = (journeyCardProps: JourneyCardProps) => {
  const { isMobile, isTablet, isLargeMobile } = useResponsive();

  return isMobile ? (
    <JourneyCardMobile {...journeyCardProps} />
  ) : isLargeMobile ? (
    <JourneyCardLargeMobile {...journeyCardProps} />
  ) : isTablet ? (
    <JourneyCardTablet {...journeyCardProps} />
  ) : (
    <JourneyCardDesktop {...journeyCardProps} />
  );
};
