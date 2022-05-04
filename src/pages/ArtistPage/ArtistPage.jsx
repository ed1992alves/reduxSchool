import { useParams } from "react-router-dom";
import React, { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ArtistPage.scss";

const ArtistPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const artists = useSelector((state) => state.artists);
  const [artist, setArtist] = React.useState(artists[id]);

  const songs = useSelector((state) => state.songs);
  const artistSongs = [];
  useLayoutEffect(() => {
    Object.values(songs).map((song) => {
      if (song.artistId === artist.id) {
        artistSongs.push(song);
      }
    });
  }, [artist]);

  console.log(artistSongs);
  console.log(artist);

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
          })}
        </div>
      </div>
    </div>
  );
};

export default ArtistPage;
