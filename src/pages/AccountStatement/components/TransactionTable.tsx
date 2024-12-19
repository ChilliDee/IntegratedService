import React from 'react';
import { Transaction } from '../types/statement';
import { formatCurrency } from '../utilities/formatters';

export const TransactionTable: React.FC<{ transactions: Transaction[] }> = ({ transactions }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
    <h3 className="text-[#09365B] text-xl font-bold p-6 border-b border-[#BFE2FF]/20">
      Transaction History
    </h3>
    
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-[#BFE2FF]/5">
            <th className="px-6 py-4 text-left text-sm font-medium text-[#09365B]">Date</th>
            <th className="px-6 py-4 text-left text-sm font-medium text-[#09365B]">Description</th>
            <th className="px-6 py-4 text-right text-sm font-medium text-[#09365B]">Debits</th>
            <th className="px-6 py-4 text-right text-sm font-medium text-[#09365B]">Credits</th>
            <th className="px-6 py-4 text-right text-sm font-medium text-[#09365B]">Balance</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr 
              key={index} 
              className={`border-t border-[#BFE2FF]/10 ${
                index % 2 === 0 ? 'bg-white' : 'bg-[#BFE2FF]/5'
              }`}
            >
              <td className={`px-6 py-4 text-sm text-[#09365B] ${transaction.isHistoricalEvent ? 'font-bold' : ''}`}>
                {transaction.date}
              </td>
              <td className={`px-6 py-4 text-sm text-[#09365B] ${transaction.isHistoricalEvent ? 'font-bold' : ''}`}>
                {transaction.description}
              </td>
              <td className="px-6 py-4 text-right text-sm text-red-500">
                {transaction.debits ? formatCurrency(transaction.debits) : ''}
              </td>
              <td className="px-6 py-4 text-right text-sm text-[#0DA1AA]">
                {transaction.credits ? formatCurrency(transaction.credits) : ''}
              </td>
              <td className="px-6 py-4 text-right text-sm font-medium text-[#09365B]">
                {transaction.balance ? formatCurrency(transaction.balance) : ''}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);