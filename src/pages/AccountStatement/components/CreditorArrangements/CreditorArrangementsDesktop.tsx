import { AccountStatementBaseData } from "../../types/dto/accountStatementBaseData";
import { CreditorCardResponsive } from "../CreditorCard/CreditorCardResponsive";

export const CreditorArrangementsDesktop = (
  baseData: AccountStatementBaseData
) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <h3 className="text-[#09365B] text-xl font-bold p-6 border-b border-[#BFE2FF]/20">
        Creditor Arrangement Summary
      </h3>

      <div className="p-6">
        <div className="space-y-3">
          {Object.values(baseData.creditorData).map((creditor) => (
            <CreditorCardResponsive {...creditor} />
          ))}
        </div>
        <div className="mt-6 pt-6 border-t border-[#BFE2FF]/20">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#09365B]/5 p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <h4 className="text-lg font-bold text-[#09365B]">
                  Management Fee
                </h4>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#BFE2FF] text-[#09365B]">
                  {baseData.managementFeePercentage}% of Payments Received
                </span>
              </div>
            </div>

            {baseData.monthlyAdminFee != null && (
              <div className="bg-[#09365B]/5 p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <h4 className="text-lg font-bold text-[#09365B]">
                    Transaction Fee
                  </h4>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#BFE2FF] text-[#09365B]">
                    ${baseData.monthlyAdminFee} Monthly
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
