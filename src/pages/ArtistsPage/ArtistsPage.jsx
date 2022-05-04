import React from "react";
import "./ArtistsPage.scss";
import ArtistCard from "../../components/ArtistCard/ArtistCard";
import { useDispatch, useSelector } from "react-redux";

const ArtistsPage = () => {
  const dispatch = useDispatch();
  const artists = useSelector((state) => state.artists);

  return (
    <div className="artistsPage-container">
      <h1>Artists</h1>
      <div className="artists-container">
        {Object.values(artists).map((artist) => {
          return <ArtistCard key={artist.id} artist={artist} />;
        })}
      </div>
    </div>
  );
};

export default ArtistsPage;
