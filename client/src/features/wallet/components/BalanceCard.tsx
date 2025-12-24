import React from "react";
import { totalSavings } from "../../../data/wallet.mock";

function formatCurrency(amount: number) {
  return `Rs.${amount.toLocaleString()}`;
}

export const BalanceCard: React.FC = () => {
  const progress = (totalSavings.saved / totalSavings.target) * 100;

  return (
    <div className="bg-[#111827] rounded-xl p-6 w-full max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-xl font-bold flex items-center">
          🐷 Total Savings
        </h2>
        <span className="text-white font-bold text-lg">
          {progress.toFixed(1)}%
        </span>
      </div>
      <div className="w-full h-4 bg-gray-700 rounded-full mb-4">
        <div
          className="h-4 bg-[#10B981] rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-gray-400 font-semibold">
        <span className="text-[#10B981]">
          Saved: {formatCurrency(totalSavings.saved)}
        </span>
        <span>Target: {formatCurrency(totalSavings.target)}</span>
      </div>
    </div>
  );
};
