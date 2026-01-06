import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface WalletState {
  balance: number;
  target: number;
}

const initialState: WalletState = {
  balance: 250000,
  target: 1000000,
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setBalance(state, action: PayloadAction<number>) {
      state.balance = action.payload;
    },
    setTarget(state, action: PayloadAction<number>) {
      state.target = action.payload;
    },
    addIncome(state, action: PayloadAction<number>) {
      state.balance += action.payload;
    },
    spend(state, action: PayloadAction<number>) {
      state.balance -= action.payload;
    },
  },
});

export const { setBalance, setTarget, addIncome, spend } = walletSlice.actions;
export default walletSlice.reducer;
