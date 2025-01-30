import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Calculator, Percent, DollarSign } from "lucide-react";
import { LoanDetails } from "../../types";
import styles from "./LoanResults.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function LoanResults({
  monthlyPayment,
  totalInterest,
  totalPayment,
  amortizationSchedule,
  actualTermYears,
}: LoanDetails) {
  const formatCurrency = (value: number) =>
    value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

  const formatTooltipLabel = (month: number, isLastPoint: boolean) => {
    if (month === 0) return "Start of loan";
    if (isLastPoint) return "End of loan";
    const years = Math.floor(month / 12);
    const months = month % 12;
    if (months === 0) return `Year ${years}`;
    return `Year ${years}, Month ${months}`;
  };

  const formatXAxisLabel = (month: number) => {
    if (month === 0) return "0";
    const years = Math.floor(month / 12);
    const months = month % 12;
    if (months === 0) return `${years}`;
    return `${years}.${months}`;
  };

  const chartData = {
    labels: amortizationSchedule.map((point, index) => ({
      display: formatXAxisLabel(point.month),
      tooltip: formatTooltipLabel(
        point.month,
        index === amortizationSchedule.length - 1
      ),
    })),
    datasets: [
      {
        label: "Principal Balance",
        data: amortizationSchedule.map((point) => point.principalBalance),
        borderColor: "#218C43",
        backgroundColor: "rgba(33, 140, 67, 0.1)",
        fill: "start",
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#218C43",
        pointHoverBorderWidth: 3,
      },
      {
        label: "Interest Paid",
        data: amortizationSchedule.map((point) => point.interestPaid),
        borderColor: "#BDD631",
        backgroundColor: "rgba(189, 214, 49, 0.4)",
        fill: "start",
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#BDD631",
        pointHoverBorderWidth: 3,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
      mode: "index" as const,
    },
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            family: "Cantarell",
          },
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        padding: 12,
        titleColor: "#fff",
        titleFont: {
          size: 14,
          weight: "normal",
          family: "Cantarell",
        },
        bodyFont: {
          size: 13,
          family: "Cantarell",
        },
        callbacks: {
          title: (context: any) => {
            return chartData.labels[context[0].dataIndex].tooltip;
          },
          label: (context: any) => {
            const label = context.dataset.label;
            const value = formatCurrency(context.parsed.y);
            return ` ${label}: ${value}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Years",
          padding: { top: 10 },
          font: {
            size: 14,
            weight: "400",
            family: "Cantarell",
          },
        },
        grid: {
          display: false,
        },
        ticks: {
          callback: (value: any) => {
            const label = chartData.labels[value];
            if (!label) return "";
            const [years, months] = label.display.split(".");
            return months ? "" : years;
          },
          maxRotation: 0,
          autoSkip: false,
          font: {
            size: 13,
            weight: "400",
            family: "Cantarell",
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "Amount Owing",
          padding: { bottom: 10 },
          font: {
            size: 14,
            weight: "400",
            family: "Cantarell",
          },
        },
        beginAtZero: true,
        ticks: {
          callback: (value: number) => formatCurrency(value),
          font: {
            size: 13,
            weight: "400",
            family: "Cantarell",
          },
        },
      },
    },
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Loan Summary</h2>

      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <Calculator className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Monthly Payment</h3>
          </div>
          <p className={styles.cardValue}>{formatCurrency(monthlyPayment)}</p>
          <p className={styles.cardSubtext}>
            Loan term: {actualTermYears.toFixed(1)} years
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <Percent className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Total Interest</h3>
          </div>
          <p className={styles.cardValue}>{formatCurrency(totalInterest)}</p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <DollarSign className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Total Payment</h3>
          </div>
          <p className={styles.cardValue}>{formatCurrency(totalPayment)}</p>
        </div>
      </div>

      <div className={styles.chartContainer}>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
