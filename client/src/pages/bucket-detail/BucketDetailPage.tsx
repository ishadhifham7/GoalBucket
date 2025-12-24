import React from "react";
import { useParams } from "react-router-dom";
{
  /*import { bucketDetail } from "../../data/bucketDetail.mock";*/
}
import { BucketProgressCard } from "../../features/bucket/component/BucketProgressCard";
import { BucketItemsGrid } from "../../features/bucket/component/BucketItemCard";

export const BucketDetailPage: React.FC = () => {
  const { id } = useParams();

  // For now, we only have one dummy bucket
  // Later, you can fetch based on id
  console.log("Selected bucket id:", id);

  return (
    <div className="min-h-screen bg-[#0B111B] p-6">
      <BucketProgressCard />
      <BucketItemsGrid />
    </div>
  );
};
