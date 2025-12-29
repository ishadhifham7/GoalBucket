import React from "react";
import { BalanceCard } from "../../features/wallet/components/BalanceCard";
import { BucketCard } from "../../features/bucket/component/BucketCard";

export const DashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B111B] p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-white text-3xl font-bold">
            Personal Budget 2025
          </h1>
          <p className="text-gray-400 mt-1">Track your savings and goals</p>
        </div>
        <button className="bg-[#10B981] hover:bg-green-500 text-white px-5 py-2 rounded-xl font-semibold flex items-center gap-2">
          ➕ Add Income
        </button>
      </div>

      {/* Main Summary */}
      <BalanceCard />

      {/* Buckets Grid */}
      <BucketCard />
    </div>
  );
};
