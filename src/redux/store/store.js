// store.ts
import { configureStore } from "@reduxjs/toolkit";
import cmdsReducer from "../reducers/cmdsReducer";

export const store = configureStore({
  reducer: {
    cmds: cmdsReducer
  }
});

export default store;
