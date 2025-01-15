import React from "react";
import { AccountStatementBaseData } from "../types/dto/accountStatementBaseData";

export const DebtProgressBar: React.FC<AccountStatementBaseData> = (data) => {
  return (
    <div className="pt-6 mb-6">
      <div className="relative h-2 bg-[#0DA1AA] rounded-full">
        <div
          className="absolute top-0 left-0 h-full bg-[#D3F531] rounded-full transition-all duration-1000"
          style={{ width: `${data.progress}%` }}
        />
        <div
          className="absolute -top-7 transition-all duration-1000 flex flex-col items-center"
          style={{ left: `${data.progress}%`, transform: "translateX(-50%)" }}
        >
          <span className="text-xs font-bold text-[#09365B] bg-white px-2 py-0.5 rounded-lg shadow-sm border border-[#BFE2FF]">
            {data.progress}% Complete
          </span>
          <div className="w-2.5 h-2.5 bg-[#D3F531] rounded-full mt-1 shadow-md border-2 border-white" />
        </div>
      </div>
    </div>
  );
};
