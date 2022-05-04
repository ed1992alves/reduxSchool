import { useNavigate, useParams } from "react-router-dom";
import React, { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ArtistPage.scss";
import { useState } from "react";

const ArtistPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const artists = useSelector((state) => state.artists);
  const [artist, setArtist] = useState(artists[id]);

  const songs = useSelector((state) => state.songs);
  const [artistSongs, setArtistSongs] = useState(
    Object.entries(songs).filter(([key, song]) => song.artistId === artist.id)
  );

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
            console.log(song)
            return (
              <div
                className="song"
                key={song.id}
                onClick={() => navigate(`/songs/${song[0]}`)}
              >
                <img src={song[1].albumArt} alt={song[1].title}></img>
                <span>{song[1].name}</span>
                <span>{song[1].album}</span>
                <span>{song[1].genre}</span>
                <span>{song[1].year}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ArtistPage;
