import { Routes, Route } from "react-router-dom";
import LoanRepaymentCalculator from "../pages/LoanRepaymentCalculator/page/LoanRepaymentCalculator";
import CreditApplicationForm from "../pages/CreditApplicationForm/page/CreditApplicationForm";
import NotFound from "../pages/NotFound/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoanRepaymentCalculator />} />
      <Route
        path="/loan-repayment-calculator"
        element={<LoanRepaymentCalculator />}
      />
      <Route path="/cc-app-form" element={<CreditApplicationForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
