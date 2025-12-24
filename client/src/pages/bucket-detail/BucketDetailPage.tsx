import React from "react";
import { bucketDetail } from "../../data/bucketDetail.mock";
import { BucketProgressCard } from "../../features/bucket/component/BucketProgressCard";
import { BucketItemsGrid } from "../../features/bucket/component/BucketItemCard";

export const BucketDetailPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B111B] p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <button className="text-white font-bold mr-2">←</button>
          <h1 className="text-white text-3xl font-bold inline">
            {bucketDetail.title}
          </h1>
          <p className="text-gray-400 mt-1">{bucketDetail.description}</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-xl flex items-center gap-1">
            ⏸ Pause
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-xl flex items-center gap-1">
            ⚙ Edit Bucket
          </button>
          <button className="bg-[#10B981] hover:bg-green-500 text-white px-4 py-2 rounded-xl font-semibold">
            Deposit
          </button>
        </div>
      </div>

      {/* Overall Progress */}
      <BucketProgressCard />

      {/* Items Grid */}
      <BucketItemsGrid />
    </div>
  );
};
