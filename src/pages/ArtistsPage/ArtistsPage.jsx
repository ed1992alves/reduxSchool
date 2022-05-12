import React, { useState } from "react";
import "./ArtistsPage.scss";
import ArtistCard from "../../components/ArtistCard/ArtistCard";
import { useDispatch, useSelector } from "react-redux";
import DropdownContainer from "../../components/DropdownContainer/index";
import { currentGenre } from "../../redux/reducer/selectors";

const ArtistsPage = () => {
  const artists = useSelector((state) => state.artists);
  const songs = useSelector((state) => state.songs);
  const selectedGenre = useSelector(currentGenre);

  const genres = Array.from(
    new Set(Object.values(songs).map((el) => el.genre))
  );
  genres.push("all");

  function artistsBySelectedGenre() {
    return Object.values(songs)
      .filter((el) => el.genre === selectedGenre)
      .map((el) => el.artistId);
  }

  const filtered = Object.values(artists).filter((el) =>
    artistsBySelectedGenre().includes(el.id)
  );


  return (
    <div className="artists-page-container">
      <h1>Artists</h1>
      <DropdownContainer options={genres} />
      <div className="artists-container">
        {Object.values(
          selectedGenre === undefined || selectedGenre === "all"
            ? artists
            : filtered
        ).map((artist) => {
          return <ArtistCard key={artist.id} artist={artist} />;
        })}
      </div>
    </div>
  );
};

export default ArtistsPage;
