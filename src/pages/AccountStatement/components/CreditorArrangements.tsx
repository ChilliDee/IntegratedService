import React from 'react';
import { CreditorArrangement } from '../types/statement';
import { CreditorCard } from './CreditorCard';

interface CreditorArrangementsProps {
  arrangements: CreditorArrangement[];
}

export const CreditorArrangements: React.FC<CreditorArrangementsProps> = ({ arrangements }) => {
  const managementFee = arrangements.find(arr => arr.creditor.includes('Management Fee'));
  const creditors = arrangements.filter(arr => !arr.creditor.includes('Management Fee'));

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <h3 className="text-[#09365B] text-xl font-bold p-6 border-b border-[#BFE2FF]/20">
        Creditor Arrangement Summary
      </h3>

      <div className="p-6">
        <div className="space-y-3">
          {creditors.map((arrangement) => (
            <CreditorCard key={arrangement.creditor} arrangement={arrangement} />
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-[#BFE2FF]/20">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#09365B]/5 p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <h4 className="text-lg font-bold text-[#09365B]">Just Budget - Management Fee</h4>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#BFE2FF] text-[#09365B]">
                  20% of Payments Received
                </span>
              </div>
            </div>

            <div className="bg-[#09365B]/5 p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <h4 className="text-lg font-bold text-[#09365B]">Transaction Fees</h4>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#BFE2FF] text-[#09365B]">
                  $6 Flat Monthly Fee
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};