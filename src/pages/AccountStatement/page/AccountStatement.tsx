import React from "react";
import { Header } from "../components/Header";
import { DebtProgress } from "../components/DebtProgress";
import { TransactionTable } from "../components/TransactionTable";
import { CreditorArrangements } from "../components/CreditorArrangements";
import { Footer } from "../components/Footer";
import { demoData } from "../data/mockData";

const AccountStatement: React.FC = () => {
  const creditorCount = demoData.creditorArrangements.filter(
    (arr) => !arr.creditor.includes("Management Fee")
  ).length;

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4">
      <div className="max-w-6xl mx-auto space-y-3">
        <Header
          clientInfo={demoData.clientInfo}
          paymentSummary={demoData.paymentSummary}
        />
        <DebtProgress
          summary={demoData.debtSummary}
          paymentSummary={demoData.paymentSummary}
          creditorCount={creditorCount}
        />
        <CreditorArrangements arrangements={demoData.creditorArrangements} />
        <TransactionTable transactions={demoData.transactions} />
        <Footer />
      </div>
    </div>
  );
};

export default AccountStatement;
