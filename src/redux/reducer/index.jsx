import { initialState } from "./initialState";

function youSongReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ARTISTS_MUSIC":
      return Object.entries(state.songs).filter(
        ([key, song]) => song.artistId === action.artistId
      );
    case "SET_NEW_ARTIST":
      let newID = Object.keys(state.artists).length + 1;
      return {
        ...state,
        artists: {
          ...state.artists,
          [newID]: { ...action.newArtist, id: newID },
        },
      };
      case "SET_CURRENT_GENRE":
        return {...state, currentGenre: action.currentGenre};
    default:
      return state;
  }
}

export default youSongReducer;
