import currency from "currency.js";

export const formatNumber = (num: string): string => {
  const amount = currency(num, {
    precision: 0,
  });

  const formattedAmount = amount.format();

  return formattedAmount;
};
