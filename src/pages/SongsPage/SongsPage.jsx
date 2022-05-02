import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router/cjs/react-router";
import { initialState } from "../../redux/reducer/initialState";
import "./SongsPage.scss";

const SongsPage = () => {
  const artists = useSelector((state) => state.artists);
  const songs = useSelector((state) => state.artists.songs);

  const findArtistName = (id) => {
    const names = Object.values(artists).map((artist) => {
      if (artist.id === id) {
        console.log(artist.name);
        return artist.name;
      }
    });
    return names.filter((name) => name !== undefined)[0];
  };

  console.log(artists);
  console.log(songs);

  return (
    <div className="songsPage-container">
      <div className="list">
        {Object.entries(songs).map(([keys, values]) => {
          return (
            <div className="song">
              <div className="id">{keys}</div>
              <div className="img">
                <img src={values.albumArt} width="70px" height="70px" />
              </div>
              <div className="name-info">
                <div className="name-artist">
                  <p>{findArtistName(values.artistId)}</p>
                </div>
                <div className="name-music">
                  <p>{values.name}</p>
                </div>
              </div>
              <div className="album">
                <p>{values.album}</p>
              </div>
              <div className="year">
                <p>{values.year}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SongsPage;
