import { AccountStatementBaseData } from "../../types/dto/accountStatementBaseData";
import { CreditorCardResponsive } from "../CreditorCard/CreditorCardResponsive";

export const CreditorArrangementsMobile = (
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
          <div className="space-y-3">
            <div className="bg-[#09365B]/5 p-4 rounded-lg">
              <div>
                <h4 className="text-base font-bold text-[#09365B] text-center mb-2">
                  Management Fee
                </h4>
                <div className="flex justify-center">
                  <span className="px-3 py-1 rounded-md text-sm font-medium bg-[#BFE2FF] text-[#09365B] text-center">
                    {baseData.managementFeePercentage}% of Payments Received
                  </span>
                </div>
              </div>
            </div>

            {baseData.monthlyAdminFee != null && (
              <div className="bg-[#09365B]/5 p-4 rounded-lg">
                <h4 className="text-base font-bold text-[#09365B] text-center mb-2">
                  Transaction Fee
                </h4>
                <div className="flex justify-center">
                  <span className="px-3 py-1 rounded-md text-sm font-medium bg-[#BFE2FF] text-[#09365B] text-center">
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
