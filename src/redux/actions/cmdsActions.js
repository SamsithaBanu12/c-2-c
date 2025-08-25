// cmdsActions.js
export const setCmds = (cmds) => ({
  type: "SET_CMDS",
  payload: cmds
});
export const sendCommand = (editcmd) => ({
  type: "SEND_COMMAND",
  payload: editcmd
})
export const storeCommand = (storecmd)=>({
  type: "STORE_COMMAND",
  payload: storecmd
})
export const getstoreCommands = (storecmd)=>({
  type: "GET_STORE_COMMAND",
  payload: storecmd
})