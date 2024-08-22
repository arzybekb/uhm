import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./basketSlice";

const store = configureStore({
  reducer: {
    basket: counterReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
