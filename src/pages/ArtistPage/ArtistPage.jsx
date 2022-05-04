import { useParams } from "react-router-dom";
import React, { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ArtistPage.scss";
import { useState } from "react";

const ArtistPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const artists = useSelector((state) => state.artists);
  const [artist, setArtist] = useState(artists[id]);

  const songs = useSelector((state) => state.songs);
  const [artistSongs, setArtistSongs] = useState([]);
  useLayoutEffect(() => {
    /* esta lógica devia estar num selector */
    setArtistSongs(Object.values(songs).filter((song) => song.artistId === artist.id))
    }, [artist]);

  console.log(artistSongs)
  return (
    <div className="artistPage-container">
      <div className="artistPage-container">
        <img src={artist.photo} alt={artist.name} />
      </div>
      <div className="artistPage-info">
        <div className="artistPage-bio">
          <h1>{artist.name}</h1>
          <p>{artist.age}</p>
          <p>{artist.city}</p>
          <p>{artist.nationality}</p>
        </div>
        <div className="artistPage-song">
          {artistSongs.map((song) => {
            console.log(song);
            return (
              <div className="song" key={song.id}>
                <img src={song.albumArt} alt={song.title}></img>
                <span>{song.name}</span>
                <span>{song.album}</span>
                <span>{song.genre}</span>
                <span>{song.year}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ArtistPage;
