import React from "react";
import { PaymentSummary } from "../types/statement";
import { formatCurrency } from "../utilities/formatters";

export const PaymentSummarySection: React.FC<{ summary: PaymentSummary }> = ({
  summary,
}) => (
  <div className="bg-[#09365B] text-white p-6 rounded-2xl mb-6">
    <div className="grid grid-cols-2 gap-8">
      <div className="flex items-center space-x-4">
        <div className="bg-[#BFE2FF]/10 p-3 rounded-xl">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div>
          <p className="text-white/80 text-sm">Current Payment</p>
          <p className="text-xl font-bold">
            {formatCurrency(summary.currentPayment)} {summary.paymentFrequency}
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="bg-[#BFE2FF]/10 p-3 rounded-xl">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div>
          <p className="text-white/80 text-sm">Estimated Completion</p>
          <p className="text-xl font-bold">{summary.estimatedCompletion}</p>
        </div>
      </div>
    </div>
  </div>
);
