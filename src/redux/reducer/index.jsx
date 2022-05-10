import { initialState } from "./initialState";

function youSongReducer(state = initialState, action) {
  switch (action.type) {    

    case 'GET_ARTISTS_MUSIC':
      return Object.entries(state.songs).filter(([key, song]) => song.artistId === action.artistId)
    default:
      return state;
  }

  return state;
}

export default youSongReducer;
