// store.ts
import { configureStore } from "@reduxjs/toolkit";
import cmdsReducer, { getstoreCommands, storeCommand } from "../reducers/cmdsReducer";
import { sendCommand } from "../actions/cmdsActions";

export const store = configureStore({
  reducer: {
    cmds: cmdsReducer,
    editCommand: sendCommand,
    storeCommand: storeCommand,
    getstoreCommands: getstoreCommands
  }
});

export default store;
