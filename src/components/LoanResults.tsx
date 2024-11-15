import React from 'react';
import { Line } from 'react-chartjs-2';
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
} from 'chart.js';
import { Calculator, Percent, DollarSign } from 'lucide-react';

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

interface LoanResultsProps {
  monthlyPayment: number;
  totalInterest: number;
  totalPayment: number;
  amortizationSchedule: Array<{
    month: number;
    principalBalance: number;
    interestPaid: number;
  }>;
  actualTermYears: number;
}

export default function LoanResults({
  monthlyPayment,
  totalInterest,
  totalPayment,
  amortizationSchedule,
  actualTermYears,
}: LoanResultsProps) {
  const formatCurrency = (value: number) =>
    value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

  const formatTooltipLabel = (month: number, isLastPoint: boolean) => {
    if (month === 0) return 'Start of loan';
    if (isLastPoint) return 'End of loan';
    const years = Math.floor(month / 12);
    const months = month % 12;
    if (months === 0) return `Year ${years}`;
    return `Year ${years}, Month ${months}`;
  };

  const formatXAxisLabel = (month: number) => {
    if (month === 0) return '0';
    const years = Math.floor(month / 12);
    const months = month % 12;
    if (months === 0) return `${years}`;
    return `${years}.${months}`;
  };

  const chartData = {
    labels: amortizationSchedule.map((point, index) => ({
      display: formatXAxisLabel(point.month),
      tooltip: formatTooltipLabel(point.month, index === amortizationSchedule.length - 1),
    })),
    datasets: [
      {
        label: 'Principal Balance',
        data: amortizationSchedule.map((point) => point.principalBalance),
        borderColor: '#218C43',
        backgroundColor: 'rgba(33, 140, 67, 0.1)',
        fill: 'start',
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#218C43',
        pointHoverBorderWidth: 3,
      },
      {
        label: 'Interest Paid',
        data: amortizationSchedule.map((point) => point.interestPaid),
        borderColor: '#BDD631',
        backgroundColor: 'rgba(189, 214, 49, 0.4)',
        fill: 'start',
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#BDD631',
        pointHoverBorderWidth: 3,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
      mode: 'index' as const,
    },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            family: 'Cantarell',
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        padding: 12,
        titleColor: '#fff',
        titleFont: {
          size: 14,
          weight: 'normal',
          family: 'Cantarell',
        },
        bodyFont: {
          size: 13,
          family: 'Cantarell',
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
          text: 'Years',
          padding: { top: 10 },
          font: {
            size: 14,
            weight: '400',
            family: 'Cantarell',
          },
        },
        grid: {
          display: false,
        },
        ticks: {
          callback: (value: any) => {
            const label = chartData.labels[value];
            if (!label) return '';
            const [years, months] = label.display.split('.');
            return months ? '' : years;
          },
          maxRotation: 0,
          autoSkip: false,
          font: {
            size: 13,
            weight: '400',
            family: 'Cantarell',
          },
        },
      },
      y: {
        title: {
          display: true,
          text: 'Amount Owing',
          padding: { bottom: 10 },
          font: {
            size: 14,
            weight: '400',
            family: 'Cantarell',
          },
        },
        beginAtZero: true,
        ticks: {
          callback: (value: number) => formatCurrency(value),
          font: {
            size: 13,
            weight: '400',
            family: 'Cantarell',
          },
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-xl text-gray-800 font-bold mb-6 font-sans">Loan Summary</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-green-50/80 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Calculator className="w-5 h-5 text-[#218C43]" />
            <h3 className="text-sm text-gray-600">Monthly Payment</h3>
          </div>
          <p className="text-xl font-bold text-gray-800">{formatCurrency(monthlyPayment)}</p>
          <p className="text-sm text-gray-500 mt-1">
            Loan term: {actualTermYears.toFixed(1)} years
          </p>
        </div>

        <div className="bg-green-50/80 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Percent className="w-5 h-5 text-[#218C43]" />
            <h3 className="text-sm text-gray-600">Total Interest</h3>
          </div>
          <p className="text-xl font-bold text-gray-800">{formatCurrency(totalInterest)}</p>
        </div>

        <div className="bg-green-50/80 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <DollarSign className="w-5 h-5 text-[#218C43]" />
            <h3 className="text-sm text-gray-600">Total Payment</h3>
          </div>
          <p className="text-xl font-bold text-gray-800">{formatCurrency(totalPayment)}</p>
        </div>
      </div>

      <div className="w-full h-[400px]">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}