import { useParams } from "react-router-dom";
import "./style.scss";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const ArtistPage = () => {
  const songs = useSelector((state) => state.songs);
  const { id } = useParams();

  const data = Object.entries(songs).find(([keys, values]) => id === keys)[1];

  return (
    <div
      className="single-page"
      style={{ backgroundImage: `url(${data.albumArt})` }}
    >
      <div className="albumImage"></div>
      <div className="Info">
        <div className="artistName"></div>
        <div className="musicName"></div>
        <div className="musicYear"> </div>
        <div className="albumName"></div>
      </div>
    </div>
  );
};

export default ArtistPage;
