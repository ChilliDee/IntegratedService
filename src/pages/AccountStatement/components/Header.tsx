import React from 'react';
import { ClientInfo, PaymentSummary } from '../types/statement';

interface HeaderProps {
  clientInfo: ClientInfo;
  paymentSummary: PaymentSummary;
}

export const Header: React.FC<HeaderProps> = ({ clientInfo, paymentSummary }) => (
  <div className="space-y-3">
    {/* Logo and Title Section */}
    <div className="flex items-center justify-between pb-2">
      <img 
        src="https://www.justbudget.com.au/wp-content/uploads/2021/02/just-budget-logo.png" 
        alt="Just Budget" 
        className="h-16"
      />
      <h1 className="text-4xl font-bold text-[#09365B]">Account Statement</h1>
    </div>

    {/* Client Information Section */}
    <div className="bg-white rounded-2xl shadow-lg">
      <div className="p-6">
        <div className="grid grid-cols-[2fr_1fr] gap-8">
          {/* Client Details */}
          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-[#09365B]">{clientInfo.name}</h2>
            <div className="text-base text-[#09365B]/70 tracking-widest">
              <p>{clientInfo.address.street}</p>
              <p>{clientInfo.address.city}, {clientInfo.address.state}, {clientInfo.address.postcode}</p>
            </div>
          </div>

          {/* Statement Details */}
          <div className="space-y-2">
            <div className="flex items-center justify-between py-1.5 border-b border-[#BFE2FF]/20">
              <span className="text-[#09365B]/70">Application ID</span>
              <span className="text-[#09365B] font-medium">{clientInfo.accountNumber}</span>
            </div>
            <div className="flex items-center justify-between py-1.5 border-b border-[#BFE2FF]/20">
              <span className="text-[#09365B]/70">Statement Period</span>
              <span className="text-[#09365B] font-medium">December 2024</span>
            </div>
            <div className="flex items-center justify-between py-1.5">
              <span className="text-[#09365B]/70">Enquiries</span>
              <span className="text-[#09365B] font-medium">{clientInfo.contactNumber}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);