import React from 'react';

export const Footer: React.FC = () => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
    <div className="p-8 text-sm text-[#09365B]/80">
      <h4 className="text-lg font-bold text-[#09365B] mb-6">Disclaimer for Account Statement</h4>
      
      <div className="space-y-6">
        <div>
          <h5 className="font-semibold mb-2">1. Figures Based on Creditor Information</h5>
          <ul className="list-disc pl-4 space-y-1">
            <li>The figures presented in this statement are based on information previously provided to us by your creditors.</li>
            <li>These figures may be outdated as creditor systems do not always reflect an accurate balance due, especially when alternative payment arrangements are in place.</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-2">2. Arrangement Variability</h5>
          <ul className="list-disc pl-4 space-y-1">
            <li>Over the lifetime of a debt, there may be numerous arrangements made, and amounts paid to each creditor may vary.</li>
            <li>Payment amounts are not consistent month to month and may change due to various factors.</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-[#BFE2FF]/20">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold text-[#09365B]">Contact Information:</p>
            <p>Phone: 1300 795 775</p>
          </div>
          <div>
            <p className="font-semibold text-[#09365B]">Business Hours:</p>
            <p>Monday to Friday 9:00 AM - 5:00 PM AEST</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);