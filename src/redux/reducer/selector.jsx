export const filterArtistName = (state) => {
  const names = Object.values(state.artists).map((artist) => {
    return artist.name;
  });

  return names;
};

export const filterGenreName = (state) => {
  const genre = state.genre.map((cenas) => {
    return cenas;
  });
  return genre;
};
