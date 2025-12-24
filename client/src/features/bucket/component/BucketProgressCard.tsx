import React from "react";
import { bucketDetail } from "../../../data/bucketDetail.mock";

function formatCurrency(amount: number) {
  return `Rs.${amount.toLocaleString()}`;
}

export const BucketProgressCard: React.FC = () => {
  const { totalSaved, totalTarget } = bucketDetail;
  const progress = (totalSaved / totalTarget) * 100;

  return (
    <div className="bg-[#111827] rounded-xl p-6 mt-6 w-full max-w-3xl mx-auto">
      <h2 className="text-[#10B981] font-semibold mb-2">Overall Progress</h2>
      <div className="w-full h-4 bg-gray-700 rounded-full mb-4">
        <div
          className="h-4 bg-[#10B981] rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex justify-between text-white font-bold mb-2">
        <span>Total Saved</span>
        <span>{progress.toFixed(1)}%</span>
      </div>
      <div className="flex justify-between text-gray-400 font-medium">
        <span>Saved: {formatCurrency(totalSaved)}</span>
        <span>Target: {formatCurrency(totalTarget)}</span>
      </div>
    </div>
  );
};
