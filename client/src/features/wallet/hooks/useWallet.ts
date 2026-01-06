import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import {
  loadWallet,
  addIncomeThunk,
  spendThunk,
  updateWalletTarget,
} from "../../../store/wallet/wallet.thunk";

export const useWallet = () => {
  const dispatch = useAppDispatch();
  const wallet = useAppSelector((state) => state.wallet);

  // Load wallet when hook is used
  useEffect(() => {
    dispatch(loadWallet());
  }, [dispatch]);

  const addIncome = (amount: number) => {
    dispatch(addIncomeThunk(amount));
  };

  const spendMoney = (amount: number) => {
    dispatch(spendThunk(amount));
  };

  const setTarget = (target: number) => {
    dispatch(updateWalletTarget(target));
  };

  return {
    wallet,
    addIncome,
    spendMoney,
    setTarget,
  };
};
