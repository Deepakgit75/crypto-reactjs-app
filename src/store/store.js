import { configureStore } from "@reduxjs/toolkit";
import bitcoinSlice from "./bitcoinSlice";
import trendcoinSlice from "./trendcoinSlice";

 const store = configureStore({
    reducer: {
        coin: bitcoinSlice,
        trendcoin: trendcoinSlice,
    },
  });

export default store;