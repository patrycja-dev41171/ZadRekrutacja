import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../features/data/data-slice";

export const store = configureStore({
  reducer: {
    starWarsData: userSlice.reducer,
  },
});

export type StoreState = ReturnType<typeof store.getState>;
