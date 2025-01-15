import React from "react";
import { formatCurrency } from "../../utilities/formatters";
import { AccountStatementTransactionData } from "../../types/dto/accountStatementTransactionData";

export const TransactionTableLargeMobile: React.FC<
  AccountStatementTransactionData[]
> = (transactions) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
    <h3 className="text-[#09365B] text-xl font-bold p-6 border-b border-[#BFE2FF]/20">
      Transaction History
    </h3>

    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-[#BFE2FF]/5">
            <th className="px-3 py-2 text-left text-xxs font-medium text-[#09365B]">
              Date
            </th>
            <th className="px-3 py-2 text-left text-xs font-medium text-[#09365B]">
              Description
            </th>
            <th className="px-3 py-2 text-right text-xs font-medium text-[#09365B]">
              Debits
            </th>
            <th className="px-3 py-2 text-right text-xs font-medium text-[#09365B]">
              Credits
            </th>
            <th className="px-3 py-2 text-right text-xs font-medium text-[#09365B]">
              Balance
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.values(transactions).map((t, index) => (
            <tr
              key={index}
              className={`border-t border-[#BFE2FF]/10 ${
                index % 2 === 0 ? "bg-white" : "bg-[#BFE2FF]/5"
              }`}
            >
              <td className={`px-3 py-2 text-xs text-[#09365B] font-bold`}>
                {t.transactionDate}
              </td>
              <td className={`px-3 py-2 text-xs text-[#09365B] font-bold`}>
                {t.description}
              </td>
              <td className="px-3 py-2 text-right text-xs text-red-500">
                {t.debitAmount != undefined
                  ? formatCurrency(t.debitAmount)
                  : ""}
              </td>
              <td className="px-3 py-2 text-right text-xs text-[#0DA1AA]">
                {t.creditAmount != undefined
                  ? formatCurrency(t.creditAmount)
                  : ""}
              </td>
              <td className="px-6 py-4 text-right text-sm font-medium text-[#09365B]">
                {t.balance != undefined ? formatCurrency(t.balance) : ""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
