import { configureStore } from "@reduxjs/toolkit";

const combineReducer = {};
export const store = configureStore({
  reducer: combineReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
