import { BarLoader } from "react-spinners";

export const LoadingSpinner: React.FC = () => (
  <div className="min-h-dvh flex justify-center items-center">
    <div className="relative">
      <img
        src="https://www.justbudget.com.au/wp-content/uploads/2021/02/just-budget-logo.png"
        alt="Just Budget"
        className="h-16"
      />
      <BarLoader
        cssOverride={{
          position: "relative",
          left: "89px",
          width: "180px",
          top: "-10px",
        }}
      />
    </div>
  </div>
);
