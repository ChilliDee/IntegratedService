import React from "react";
import { formatCurrency } from "../../utilities/formatters";
import { MoneyIcon } from "../icons/MoneyIcon";
import { CalendarIcon } from "../icons/CalendarIcon";
import { AccountStatementBaseData } from "../../types/dto/accountStatementBaseData";

export const PaymentSummaryInfoMobile = (
  baseData: AccountStatementBaseData
) => (
  <div className="bg-[#09365B] text-white p-4 rounded-2xl">
    <div className="mb-4">
      <div className="flex justify-center">
        <div className="bg-white/20 p-2 rounded-lg">
          <MoneyIcon className="w-5 h-5" />
        </div>
      </div>
      <div>
        <p className="text-white/80 text-sm text-center">Current Payment</p>
        <p className="text-2xl font-bold text-center">
          {formatCurrency(baseData.paymentsToJbAmount)}{" "}
          {baseData.paymentsToJbFrequency}
        </p>
      </div>
    </div>

    <div>
      <div className="flex justify-center">
        <div className="bg-white/20 p-2 rounded-lg">
          <CalendarIcon className="w-5 h-5" />
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-white/80 text-sm text-center">
          Estimated Completion
        </p>
        <p className="text-2xl font-bold text-center">
          {baseData.estimatedCompletionDate}
        </p>
      </div>
    </div>
  </div>
);
