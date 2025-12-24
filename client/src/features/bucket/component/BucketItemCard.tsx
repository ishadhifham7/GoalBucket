import React from "react";
import { bucketDetail } from "../../../data/bucketDetail.mock";

function formatCurrency(amount: number) {
  return `Rs.${amount.toLocaleString()}`;
}

export const BucketItemsGrid: React.FC = () => {
  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white text-xl font-bold">Items</h3>
        <button className="bg-[#10B981] hover:bg-green-500 text-white px-4 py-2 rounded-xl font-semibold">
          + Add Item
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bucketDetail.items.map((item) => {
          const progress = (item.saved / item.target) * 100;
          const remaining = item.target - item.saved;

          return (
            <div
              key={item.id}
              className="bg-[#111827] rounded-xl p-5 shadow-md hover:shadow-lg transition flex flex-col justify-between"
            >
              <div className="flex items-center mb-2 gap-2">
                <span>{item.icon}</span>
                <h4 className="text-white font-bold">{item.title}</h4>
              </div>

              <div className="flex justify-between mb-1 text-white font-semibold">
                <span>{progress.toFixed(1)}%</span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded-full mb-3">
                <div
                  className="h-2 bg-[#10B981] rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex flex-col gap-1 text-gray-400 text-sm">
                <span className="text-[#10B981]">
                  Saved: {formatCurrency(item.saved)}
                </span>
                <span>Target: {formatCurrency(item.target)}</span>
                <span>Remaining: {formatCurrency(remaining)}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
