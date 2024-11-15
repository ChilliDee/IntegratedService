import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoanRepaymentCalculator from '../pages/LoanRepaymentCalculator';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoanRepaymentCalculator />} />
      <Route path="/loan-repayment-calculator" element={<LoanRepaymentCalculator />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}