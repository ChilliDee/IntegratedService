import { formatCurrency } from "../../utilities/formatters";
import { MoneyIcon } from "../icons/MoneyIcon";
import { JourneyCardProps } from "../../types/props/journeyCardProps";

export const JourneyCardLargeMobile = ({
  title,
  amount,
  color,
  textColor = "text-white",
  iconBgColor = "bg-white/20",
  iconColor = "",
  footer,
}: JourneyCardProps) => (
  <div className={`${color} ${textColor} rounded-xl p-4 mt-3`}>
    <div className="flex justify-center">
      <div className={`${iconBgColor} p-1.5 rounded-lg`}>
        <MoneyIcon className={`w-4 h-4 ${iconColor}`} />
      </div>
    </div>
    <h4 className="text-md text-center font-bold">{title}</h4>
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
