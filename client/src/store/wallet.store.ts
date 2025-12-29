import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface WalletState {
  balance: number;
}

const initialState: WalletState = {
  balance: 250000,
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    addIncome(state, action: PayloadAction<number>) {
      state.balance += action.payload;
    },
    spend(state, action: PayloadAction<number>) {
      state.balance -= action.payload;
    },
  },
});

export const { addIncome, spend } = walletSlice.actions;
export default walletSlice.reducer;
