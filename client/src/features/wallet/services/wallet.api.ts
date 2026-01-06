import axios from "axios"; // your axios wrapper

export interface Wallet {
  id: string;
  balance: number;
  target: number;
}

// Fetch the wallet from backend
export const fetchWallet = async (): Promise<Wallet> => {
  const res = await axios.get("/wallet");
  return res.data;
};

// Update the wallet target
export const patchWalletTarget = async (target: number): Promise<Wallet> => {
  const res = await axios.patch("/wallet/target", { target });
  return res.data;
};

// Add income
export const postIncome = async (amount: number): Promise<Wallet> => {
  const res = await axios.post("/wallet/income", { amount });
  return res.data;
};

// Spend money
export const postSpend = async (amount: number): Promise<Wallet> => {
  const res = await axios.post("/wallet/spend", { amount });
  return res.data;
};
