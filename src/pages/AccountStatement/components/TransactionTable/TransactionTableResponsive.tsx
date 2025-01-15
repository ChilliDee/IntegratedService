import { useResponsive } from "../../../../sharedHooks/useResponsive";
import { AccountStatementTransactionData } from "../../types/dto/accountStatementTransactionData";
import { TransactionTableDesktop } from "./TransactionTableDesktop";
import { TransactionTableLargeMobile } from "./TransactionTableLargeMobile";
import { TransactionTableMobile } from "./TransactionTableMobile";
import { TransactionTableTablet } from "./TransactionTableTablet";

export const TransactionTableResponsive = (
  transactionData: AccountStatementTransactionData[]
) => {
  const { isMobile, isTablet, isLargeMobile } = useResponsive();

  return isMobile ? (
    <TransactionTableMobile {...transactionData} />
  ) : isLargeMobile ? (
    <TransactionTableLargeMobile {...transactionData} />
  ) : isTablet ? (
    <TransactionTableTablet {...transactionData} />
  ) : (
    <TransactionTableDesktop {...transactionData} />
  );
};
