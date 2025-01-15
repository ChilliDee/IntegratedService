import React from "react";
import { CreditorArrangement } from "../../types/statement";
import { formatCurrency, formatPercentage } from "../../utilities/formatters";
import { AccountStatementCreditorData } from "../../types/dto/accountStatementCreditorData";

export const CreditorCardMobile: React.FC<AccountStatementCreditorData> = (
  creditorData
) => {
  const getStatusColor = (statusId: number) => {
    if (statusId === 27) return "bg-[#D3F531]/20 text-[#09365B]";
    if (statusId === 26) return "bg-[#faca82] text-[#09365B]";
    return "bg-[#BFE2FF] text-[#09365B]";
  };

  if (creditorData.bmCreditorId === 654) {
    return (
      <div
        className={`p-4 rounded-lg space-y-2 ${
          creditorData.statusId === 27 ? "bg-[#D3F531]/10" : "bg-[#BFE2FF]/5"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <h4 className="text-lg font-bold text-[#09365B]">
              {creditorData.creditorName}
            </h4>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                creditorData.statusId
              )}`}
            >
              {creditorData.status}
            </span>
          </div>
          <div className="text-sm font-medium text-[#09365B]">
            Est. Completion: {creditorData.estimatedCompletion}
          </div>
        </div>
        <div>
          <div className="text-[#09365B]/60 mb-1">Current Balance</div>
          <div className="text-[#09365B] font-medium">
            {formatCurrency(creditorData.remainingBalance)}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`p-4 rounded-lg space-y-2 ${
        creditorData.status === "Debt Finalised"
          ? "bg-[#D3F531]/10"
          : "bg-[#BFE2FF]/5"
      }`}
    >
      <div className="mb-4">
        <h4 className="text-lg font-bold text-[#09365B]">
          {creditorData.creditorName}
        </h4>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
            creditorData.statusId
          )}`}
        >
          {creditorData.status}
        </span>
      </div>

      <div className="flex justify-between gap-8">
        <div>
          <div className="text-[#09365B]/60 mb-1">Current Balance</div>
          <div className="text-[#09365B] font-medium">
            {formatCurrency(creditorData.remainingBalance)}
          </div>
        </div>

        {/* <div>
           <div className="text-[#09365B]/60 mb-1">Interest Rate</div>
           <div className="flex items-center gap-2">
             <span className="line-through text-red-500">
               {formatPercentage(creditorData.interestBefore!)}
             </span>
             <span className="text-[#0DA1AA] font-medium">
               {formatPercentage(creditorData.interestNow!)}
             </span>
           </div>
         </div> */}

        {/* <div>
           <div className="text-[#09365B]/60 mb-1">Monthly Fees</div>
           <div className="flex items-center gap-2">
             <span className="line-through text-red-500">
               {formatCurrency(creditorData.feesBefore!)}
             </span>
             <span className="text-[#0DA1AA] font-medium">
               {formatCurrency(creditorData.feesNow!)}
             </span>
           </div>
         </div> */}

        <div>
          <div className="text-sm font-medium text-[#09365B]">
            Est. Completion: {creditorData.estimatedCompletion}
          </div>
          <div className="text-[#09365B]/60 mb-1">
            Original Monthly Repayments
          </div>
          <div className="line-through text-red-500">
            {formatCurrency(creditorData.originalRepayment * 0.1)}
          </div>
        </div>
      </div>
    </div>
  );
};
