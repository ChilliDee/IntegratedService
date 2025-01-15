import React from "react";
import { formatCurrency } from "../../utilities/formatters";
import { DebtProgressBar } from "../DebtProgressBar";
import { JourneyCardResponsive } from "../JourneyCard/JourneyCardResponsive";
import { AccountStatementBaseData } from "../../types/dto/accountStatementBaseData";
import { PaymentSummaryInfoResponsive } from "../PaymentSummaryInfo/PaymentSummaryInfoResponsive";

export const DebtProgressMobile: React.FC<AccountStatementBaseData> = (
  data
) => {
  return (
    <div className="space-y-3">
      <PaymentSummaryInfoResponsive {...data} />

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-4">
          <DebtProgressBar {...data} />
          <div>
            <JourneyCardResponsive
              title="Total Amount of Debt Relief Plan"
              amount={data.totalAmountOfDebt}
              color="bg-[#0DA1AA]"
              footer={`${data.creditorData.length} Creditors Included`}
            />
            <JourneyCardResponsive
              title="Amount Paid So Far"
              amount={data.totalAmountPaidSoFar}
              color="bg-[#09365B]"
              footer={
                <>
                  Account in Arrears:{" "}
                  <span className="text-red-400">{formatCurrency(231.0)}</span>
                </>
              }
            />
            <JourneyCardResponsive
              title="Balance Remaining"
              amount={data.totalAmountRemaining}
              color="bg-[#D3F531]"
              textColor="text-[#09365B]"
              iconBgColor="bg-[#09365B]"
              iconColor="text-[#D3F531]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
