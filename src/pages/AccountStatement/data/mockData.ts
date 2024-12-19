export const demoData = {
  clientInfo: {
    name: "Jypsy Rose Coleman",
    accountNumber: "3900",
    requiredAmount: 200.00,
    paymentFrequency: "Fortnightly",
    contactNumber: "1300 795 775",
    address: {
      street: "3 Example St",
      city: "Balmain",
      state: "NSW",
      postcode: "2041"
    }
  },
  paymentSummary: {
    monthlyBefore: 2450.00,
    monthlyNow: 400.00,
    estimatedCompletion: "January 2025",
    currentPayment: 200.00,
    paymentFrequency: "Fortnightly",
    monthlySavingsPercentage: 84
  },
  debtSummary: {
    totalDebt: 59654.44,
    amountPaid: 15243.68,
    balanceRemaining: 44410.76,
    targetDate: "January 2025",
    completionPercentage: 26
  },
  creditorArrangements: [
    {
      creditor: "Just Budget - Application Cost",
      status: "Debt Finalised",
      originalDebt: 150.00,
      remainingBalance: 0.00,
      estimatedCompletion: "Completed"
    },
    {
      creditor: "Wallet Wizard #7787",
      status: "Active Arrangement",
      originalDebt: 12500.00,
      remainingBalance: 8562.57,
      interestBefore: 47.89,
      interestNow: 12.5,
      feesBefore: 35.00,
      feesNow: 0,
      estimatedCompletion: "Jan 2025"
    },
    {
      creditor: "Cash Express #4521",
      status: "Active Arrangement",
      originalDebt: 8800.00,
      remainingBalance: 5843.25,
      interestBefore: 45.5,
      interestNow: 11.8,
      feesBefore: 35.00,
      feesNow: 0,
      estimatedCompletion: "Dec 2024"
    },
    {
      creditor: "QuickCash Solutions #9876",
      status: "Active Arrangement",
      originalDebt: 15000.00,
      remainingBalance: 11245.80,
      interestBefore: 48.8,
      interestNow: 13.2,
      feesBefore: 35.00,
      feesNow: 0,
      estimatedCompletion: "Jan 2025"
    },
    {
      creditor: "MoneyMe #3344",
      status: "Debt Finalised",
      originalDebt: 4200.00,
      remainingBalance: 0.00,
      interestBefore: 42.5,
      interestNow: 11.5,
      feesBefore: 35.00,
      feesNow: 0,
      estimatedCompletion: "Completed"
    },
    {
      creditor: "FastFinance Direct #6677",
      status: "Active Arrangement",
      originalDebt: 6500.00,
      remainingBalance: 3567.90,
      interestBefore: 46.2,
      interestNow: 12.1,
      feesBefore: 35.00,
      feesNow: 0,
      estimatedCompletion: "Oct 2024"
    },
    {
      creditor: "Credit Smart #8899",
      status: "Debt Finalised",
      originalDebt: 3900.00,
      remainingBalance: 0.00,
      interestBefore: 44.4,
      interestNow: 11.9,
      feesBefore: 35.00,
      feesNow: 0,
      estimatedCompletion: "Completed"
    },
    {
      creditor: "Cash Solutions #2233",
      status: "6 Month Arrangement ending Jan 2025",
      originalDebt: 11100.00,
      remainingBalance: 7789.45,
      interestBefore: 46.5,
      interestNow: 12.8,
      feesBefore: 35.00,
      feesNow: 0,
      estimatedCompletion: "Nov 2024"
    },
    {
      creditor: "EasyMoney #5544",
      status: "Debt Finalised",
      originalDebt: 5600.00,
      remainingBalance: 0.00,
      interestBefore: 43.3,
      interestNow: 11.7,
      feesBefore: 35.00,
      feesNow: 0,
      estimatedCompletion: "Completed"
    },
    {
      creditor: "Just Budget - Management Fee",
      status: "Active Arrangement",
      originalDebt: 7401.79,
      remainingBalance: 7401.79,
      interestBefore: 0,
      interestNow: 0,
      feesBefore: 2.78,
      feesNow: 2.78,
      estimatedCompletion: "Jan 2025"
    }
  ],
  transactions: [
    {
      date: "21/11/22",
      description: "Deposit",
      debits: null,
      credits: 231.00,
      balance: 231.00
    },
    {
      date: "21/11/22",
      description: "Reversal of Deposit - Insufficient funds",
      debits: 231.00,
      credits: null,
      balance: 0.00
    },
    {
      date: "23/11/22",
      description: "Manual Deposit",
      debits: null,
      credits: 500.00,
      balance: 500.00
    },
    {
      date: "2/12/22",
      description: "Deposit",
      debits: null,
      credits: 231.00,
      balance: 731.00
    },
    {
      date: "16/12/22",
      description: "Deposit",
      debits: null,
      credits: 231.00,
      balance: 962.00
    },
    {
      date: "19/12/22",
      description: "Wallet Wizard #7787 Added to Arrangement",
      debits: null,
      credits: null,
      balance: null,
      isHistoricalEvent: true
    },
    {
      date: "30/12/22",
      description: "Deposit",
      debits: null,
      credits: 231.00,
      balance: 1193.00
    },
    {
      date: "16/01/23",
      description: "Payment to Creditors",
      debits: 574.68,
      credits: null,
      balance: 618.32
    },
    {
      date: "16/01/23",
      description: "Management Fee",
      debits: 80.00,
      credits: null,
      balance: 538.32
    },
    {
      date: "16/01/23",
      description: "Transaction Fee",
      debits: 6.00,
      credits: null,
      balance: 532.32
    },
    {
      date: "10/02/23",
      description: "Deposit",
      debits: null,
      credits: 195.00,
      balance: 727.32
    },
    {
      date: "15/02/23",
      description: "Management Fee",
      debits: 80.00,
      credits: null,
      balance: 647.32
    },
    {
      date: "15/02/23",
      description: "Transaction Fee",
      debits: 6.00,
      credits: null,
      balance: 641.32
    },
    {
      date: "15/02/23",
      description: "Moratorium Fee",
      debits: 40.00,
      credits: null,
      balance: 601.32
    },
    {
      date: "22/02/23",
      description: "MoneyMe #3344 Added to Arrangement",
      debits: null,
      credits: null,
      balance: null,
      isHistoricalEvent: true
    },
    {
      date: "24/02/23",
      description: "Deposit",
      debits: null,
      credits: 195.00,
      balance: 796.32
    }
  ]
};