import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Transaction {
  id: string;
  type: "income" | "expense" | "deposit";
  amount: number;
  date: string;
}

interface TransactionState {
  list: Transaction[];
}

const initialState: TransactionState = {
  list: [],
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction(state, action: PayloadAction<Transaction>) {
      state.list.unshift(action.payload);
    },
  },
});

export const { addTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
