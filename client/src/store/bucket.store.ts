import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Bucket {
  id: string;
  title: string;
  description: string;
  saved: number;
  target: number;
  estCompletion: string;
}

interface BucketState {
  list: Bucket[];
}

const initialState: BucketState = {
  list: [
    {
      id: "1",
      title: "Emergency Fund",
      description: "Build a safety net for unexpected situations",
      saved: 193000,
      target: 400000,
      estCompletion: "Dec 2025",
    },
    {
      id: "2",
      title: "Vacation Trip",
      description: "Family vacation abroad",
      saved: 85000,
      target: 200000,
      estCompletion: "Jun 2025",
    },
  ],
};

const bucketSlice = createSlice({
  name: "buckets",
  initialState,
  reducers: {
    addBucket(state, action: PayloadAction<Bucket>) {
      state.list.push(action.payload);
    },
    depositToBucket(
      state,
      action: PayloadAction<{ id: string; amount: number }>
    ) {
      const bucket = state.list.find((b) => b.id === action.payload.id);
      if (bucket) {
        bucket.saved += action.payload.amount;
      }
    },
  },
});

export const { addBucket, depositToBucket } = bucketSlice.actions;
export default bucketSlice.reducer;
