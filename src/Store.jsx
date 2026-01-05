import { configureStore } from "@reduxjs/toolkit";
import { MainReducer } from "./Slices/CalcSlice";

export const store = configureStore({
  reducer: {
    main: MainReducer,
  },
});
