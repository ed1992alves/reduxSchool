export const filterArtistName = (state) => {
  const names = Object.values(state.artists).map((artist) => {
    return artist.name;
  });

  return names;
};



