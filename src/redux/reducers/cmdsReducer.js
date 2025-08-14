// cmdsReducer.js
const initialState = {
  cmds: []
};

export default function cmdsReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_CMDS":
      return { ...state, cmds: action.payload };
    default:
      return state;
  }
}
