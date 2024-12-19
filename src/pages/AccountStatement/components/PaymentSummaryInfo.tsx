import React from "react";
import { formatCurrency } from "../utilities/formatters";
import { MoneyIcon } from "./icons/MoneyIcon";
import { CalendarIcon } from "./icons/CalendarIcon";

interface PaymentSummaryInfoProps {
  currentPayment: number;
  paymentFrequency: string;
  estimatedCompletion: string;
}

export const PaymentSummaryInfo: React.FC<PaymentSummaryInfoProps> = ({
  currentPayment,
  paymentFrequency,
  estimatedCompletion,
}) => (
  <div className="bg-[#09365B] text-white p-4 rounded-2xl">
    <div className="grid grid-cols-2 gap-8">
      <div className="flex items-center justify-center space-x-3">
        <div className="bg-white/20 p-2 rounded-lg">
          <MoneyIcon className="w-5 h-5" />
        </div>
        <div className="flex flex-col">
          <p className="text-white/80 text-sm">Current Payment</p>
          <p className="text-2xl font-bold">
            {formatCurrency(currentPayment)} {paymentFrequency}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-3">
        <div className="bg-white/20 p-2 rounded-lg">
          <CalendarIcon className="w-5 h-5" />
        </div>
        <div className="flex flex-col">
          <p className="text-white/80 text-sm">Estimated Completion</p>
          <p className="text-2xl font-bold">{estimatedCompletion}</p>
        </div>
      </div>
    </div>
  </div>
);
