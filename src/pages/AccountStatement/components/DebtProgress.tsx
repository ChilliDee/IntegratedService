import React from "react";
import { DebtSummary, PaymentSummary } from "../types/statement";
import { formatCurrency } from "../utilities/formatters";
import { PaymentSummaryInfo } from "./PaymentSummaryInfo";
import { MoneyIcon } from "./icons/MoneyIcon";
import { DebtProgressBar } from "./DebtProgressBar";
import { JourneyCard } from "./JourneyCard";

interface DebtProgressProps {
  summary: DebtSummary;
  paymentSummary: PaymentSummary;
  creditorCount: number;
}

export const DebtProgress: React.FC<DebtProgressProps> = ({
  summary,
  paymentSummary,
  creditorCount,
}) => {
  return (
    <div className="space-y-3">
      <PaymentSummaryInfo
        currentPayment={paymentSummary.currentPayment}
        paymentFrequency={paymentSummary.paymentFrequency}
        estimatedCompletion={paymentSummary.estimatedCompletion}
      />

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-4">
          <DebtProgressBar percentage={summary.completionPercentage} />

          <div className="grid grid-cols-3 gap-4">
            <JourneyCard
              title="Total Amount of Debt Relief Plan"
              amount={summary.totalDebt}
              color="bg-[#0DA1AA]"
              footer={`${creditorCount} Creditors Included`}
            />

            <JourneyCard
              title="Amount Paid So Far"
              amount={summary.amountPaid}
              color="bg-[#09365B]"
              footer={
                <>
                  Account in Arrears:{" "}
                  <span className="text-red-400">{formatCurrency(231.0)}</span>
                </>
              }
            />

            <JourneyCard
              title="Balance Remaining"
              amount={summary.balanceRemaining}
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
