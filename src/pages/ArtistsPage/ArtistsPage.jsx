import React, { useState } from "react";
import "./ArtistsPage.scss";
import ArtistCard from "../../components/ArtistCard/ArtistCard";
import { useDispatch, useSelector } from "react-redux";
import DropdownContainer from "../../components/DropdownContainer/index";
import { currentGenre } from "../../redux/reducer/selectors";

const ArtistsPage = () => {
  const artists = useSelector((state) => state.artists);
  const selectedGenre = useSelector(currentGenre);
  const filtered = Object.values(artists).filter((el) =>
    el.genre.includes(selectedGenre)
  );
  const [options] = useState([
    "all",
    "folklore",
    "portuguese popular music",
    "pop",
    "hip-hop",
    "r&b",
    "emo rap",
    "pop-rap",
    "trap-tuga",
    "indie pop",
    "alternative pop",
    "indie rock",
    "rock",
    "hard rock",
    "alternative rock",
    "glam rock",
  ]);

  

  return (
    <div className="artists-page-container">
      <h1>Artists</h1>
      {console.log(selectedGenre)}
      <DropdownContainer options={options} />
      <div className="artists-container">
        {Object.values(
          (selectedGenre !== undefined) ? (selectedGenre !==  "all") ? filtered : artists : artists
        ).map((artist) => {
          return <ArtistCard key={artist.id} artist={artist} />;
        })}
      </div>
    </div>
  );
};

export default ArtistsPage;
