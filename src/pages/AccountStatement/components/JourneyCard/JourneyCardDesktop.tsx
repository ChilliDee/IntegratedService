import React from "react";
import { formatCurrency } from "../../utilities/formatters";
import { MoneyIcon } from "../icons/MoneyIcon";
import { JourneyCardProps } from "../../types/props/journeyCardProps";

export const JourneyCardDesktop = ({
  title,
  amount,
  color,
  textColor = "text-white",
  iconBgColor = "bg-white/20",
  iconColor = "",
  footer,
}: JourneyCardProps) => (
  <div className={`${color} ${textColor} rounded-xl p-4`}>
    <div className="flex items-center justify-center space-x-2 mb-2">
      <div className={`${iconBgColor} p-1.5 rounded-lg`}>
        <MoneyIcon className={`w-4 h-4 ${iconColor}`} />
      </div>
      <h4 className="text-lg font-bold">{title}</h4>
    </div>
    <p className="text-2xl font-bold text-center mb-2">
      {formatCurrency(amount)}
    </p>
    {footer && (
      <div className="pt-2 border-t border-white/10 text-center">
        <p className="text-sm font-bold">{footer}</p>
      </div>
    )}
  </div>
);
