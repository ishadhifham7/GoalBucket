import { createAsyncThunk } from "@reduxjs/toolkit";
import { setBalance, setTarget, addIncome, spend } from "./wallet.slice";
import * as walletApi from "../../features/wallet/services/wallet.api";

//fetch wallet form backend
export const loadWallet = createAsyncThunk(
  "wallet/loadWallet",
  async (_, { dispatch }) => {
    const wallet = await walletApi.fetchWallet();
    dispatch(setBalance(wallet.balance));
    dispatch(setTarget(wallet.target));
  }
);

//Upadet wallet target
export const updateWalletTarget = createAsyncThunk(
  "wallet/updateWalletTarget",
  async (target: number, { dispatch }) => {
    const wallet = await walletApi.patchWalletTarget(target);
    dispatch(setTarget(wallet.target));
    dispatch(setBalance(wallet.balance));
  }
);

//add income
export const addIncomeThunk = createAsyncThunk(
  "wallet/addIncome",
  async (amount: number, { dispatch }) => {
    await walletApi.postIncome(amount);
    dispatch(loadWallet()); // reload the wallet from backend
  }
);

// Spend money
export const spendThunk = createAsyncThunk(
  "wallet/spend",
  async (amount: number, { dispatch }) => {
    await walletApi.postSpend(amount); // you'll need this endpoint in backend
    dispatch(loadWallet());
  }
);
