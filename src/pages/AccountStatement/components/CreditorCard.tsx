import React from "react";
import { CreditorArrangement } from "../types/statement";
import { formatCurrency, formatPercentage } from "../utilities/formatters";

interface CreditorCardProps {
  arrangement: CreditorArrangement;
}

export const CreditorCard: React.FC<CreditorCardProps> = ({ arrangement }) => {
  const getStatusColor = (status: string) => {
    if (status === "Debt Finalised") return "bg-[#D3F531]/20 text-[#09365B]";
    if (status === "6 Month Arrangement ending Jan 2025")
      return "bg-[#faca82] text-[#09365B]";
    return "bg-[#BFE2FF] text-[#09365B]";
  };

  if (arrangement.creditor === "Just Budget - Application Cost") {
    return (
      <div
        className={`p-4 rounded-lg ${
          arrangement.status === "Debt Finalised"
            ? "bg-[#D3F531]/10"
            : "bg-[#BFE2FF]/5"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <h4 className="text-lg font-bold text-[#09365B]">
              {arrangement.creditor}
            </h4>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                arrangement.status
              )}`}
            >
              {arrangement.status}
            </span>
          </div>
          <div className="text-sm font-medium text-[#09365B]">
            Est. Completion: {arrangement.estimatedCompletion}
          </div>
        </div>
        <div>
          <div className="text-[#09365B]/60 mb-1">Current Balance</div>
          <div className="text-[#09365B] font-medium">
            {formatCurrency(arrangement.remainingBalance)}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`p-4 rounded-lg ${
        arrangement.status === "Debt Finalised"
          ? "bg-[#D3F531]/10"
          : "bg-[#BFE2FF]/5"
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <h4 className="text-lg font-bold text-[#09365B]">
          {arrangement.creditor}
        </h4>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
            arrangement.status
          )}`}
        >
          {arrangement.status}
        </span>
      </div>

      <div className="grid grid-cols-[1fr_1fr_1fr_auto] gap-8">
        <div>
          <div className="text-[#09365B]/60 mb-1">Current Balance</div>
          <div className="text-[#09365B] font-medium">
            {formatCurrency(arrangement.remainingBalance)}
          </div>
        </div>

        <div>
          <div className="text-[#09365B]/60 mb-1">Interest Rate</div>
          <div className="flex items-center gap-2">
            <span className="line-through text-red-500">
              {formatPercentage(arrangement.interestBefore!)}
            </span>
            <span className="text-[#0DA1AA] font-medium">
              {formatPercentage(arrangement.interestNow!)}
            </span>
          </div>
        </div>

        <div>
          <div className="text-[#09365B]/60 mb-1">Monthly Fees</div>
          <div className="flex items-center gap-2">
            <span className="line-through text-red-500">
              {formatCurrency(arrangement.feesBefore!)}
            </span>
            <span className="text-[#0DA1AA] font-medium">
              {formatCurrency(arrangement.feesNow!)}
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-6 text-sm font-medium text-[#09365B]">
            Est. Completion: {arrangement.estimatedCompletion}
          </div>
          <div className="text-[#09365B]/60 mb-1">
            Original Monthly Repayments
          </div>
          <div className="line-through text-red-500">
            {formatCurrency(arrangement.originalDebt * 0.1)}
          </div>
        </div>
      </div>
    </div>
  );
};
