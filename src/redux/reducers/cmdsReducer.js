// cmdsReducer.js
const initialState = {
  cmds: [],
  editedCommand: [],
  storeCommand: [],
  getstoreCommands: []
};

export default function cmdsReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_CMDS":
      return { ...state, cmds: action.payload };
    default:
      return state;
  }
}

export function sendCommand(state = initialState, action) {
  switch (action.type) {
    case "SEND_COMMAND":
      return { ...state, editedCommand: action.payload };
    default:
      return state;
  }
}

export function storeCommand(state = initialState, action) {
  switch (action.type) {
    case "STORE_COMMAND":
      return { ...state, storeCommand: action.payload };
    default:
      return state;
  }
}

export function getstoreCommands(state = initialState, action) {
  switch (action.type) {
    case "GET_STORE_COMMAND":
      return { ...state, getstoreCommands: action.payload };
    default:
      return state;
  }
}
