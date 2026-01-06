import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "./wallet/wallet.slice";
import bucketReducer from "./bucket.store";
import transactionReducer from "./transaction.store";

export const store = configureStore({
  reducer: {
    wallet: walletReducer,
    buckets: bucketReducer,
    transactions: transactionReducer,
  },
});

// Types (VERY IMPORTANT)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
