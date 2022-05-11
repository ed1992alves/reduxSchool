export const addSong = (newSong) => {
    console.log("hello")
  return {
    type: "NEW_SONG",
    payload: newSong
  };
};
