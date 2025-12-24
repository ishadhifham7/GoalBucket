import React from "react";
import { buckets } from "../../../data/bucket.mock";
import { Link } from "react-router-dom";

function formatCurrency(amount?: number) {
  return `Rs.${(amount ?? 0).toLocaleString()}`;
}

export const BucketCard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {buckets.map((bucket) => {
        const progress = (bucket.saved / bucket.target) * 100;

        return (
          <Link
            to={`/bucket/${bucket.id}`}
            key={bucket.id}
            className="bg-[#111827] rounded-xl p-5 flex flex-col justify-between shadow-md hover:shadow-lg transition hover:cursor-pointer"
          >
            <div className="mb-3">
              <h3 className="text-white font-bold text-lg">{bucket.title}</h3>
              <p className="text-gray-400 text-sm">{bucket.description}</p>
            </div>
            <div className="mb-3">
              <div className="flex justify-between mb-1 text-white font-semibold">
                <span>{progress.toFixed(1)}%</span>
              </div>
              <div className="w-full h-3 bg-gray-700 rounded-full">
                <div
                  className="h-3 bg-[#10B981] rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
            <div className="flex justify-between text-gray-400 text-sm font-medium mt-2">
              <span className="text-[#10B981]">
                Saved: {formatCurrency(bucket.saved)}
              </span>
              <span>Target: {formatCurrency(bucket.target)}</span>
              <span className="font-bold">Est: {bucket.estCompletion}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
