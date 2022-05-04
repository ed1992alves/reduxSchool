import React, { useState } from "react";
import "./ArtistsPage.scss";
import ArtistCard from "../../components/ArtistCard/ArtistCard";
import { useDispatch, useSelector } from "react-redux";
import DropdownContainer from "../../components/DropdownContainer/index";

const ArtistsPage = () => {
  const dispatch = useDispatch();
  const artists = useSelector((state) => state.artists);
  const [options] = useState(["HC Sirene Bombs", "Rap", "Reggae", "Funk"]);
    
  return (
    <div className="artists-page-container">
      <h1>Artists</h1>
      <DropdownContainer options={options} />
      <div className="artists-container">
        {Object.values(artists).map((artist) => {
          return <ArtistCard key={artist.id} artist={artist} />;
        })}
      </div>
    </div>
  );
};

export default ArtistsPage;
