import { useMediaQuery } from "react-responsive";

export const useResponsive = () => {
  const isMobile: boolean = useMediaQuery({ maxWidth: 460 });
  const isLargeMobile: boolean = useMediaQuery({
    minWidth: 461,
    maxWidth: 699,
  });
  const isTablet: boolean = useMediaQuery({ minWidth: 700, maxWidth: 1023 });
  const isDesktop: boolean = useMediaQuery({ minWidth: 1024 });
  const isLargeDesktop: boolean = useMediaQuery({ minWidth: 1280 });

  return {
    isMobile,
    isLargeMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
  };
};
