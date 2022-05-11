import { initialState } from "./initialState";

function youSongReducer(state = initialState, action) {
  const songKeys = Object.keys(state.songs).length + 1;
  switch (action.type) {
    case "NEW_SONG":
      return( {
        ...state, songs:{...state.songs,[songKeys]:action.payload}
      });
    default:
      return state;
  }
}

export default youSongReducer;
