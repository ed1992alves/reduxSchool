import { useSelector } from "react-redux";
import "./SongsPage.scss";
import { Song } from "../components/song/Song";
import React, { useState } from "react";
import { Modal } from "../components/modal";

const SongsPage = () => {
  const [show, setShow] = useState(false);
  const mySongs = useSelector((state) => state.songs);
  const myArtists = useSelector((state) => state.artists);
  const [finalSongs, setFinalSongs] = useState(mySongs);
  const [ordenedArtists, setOrdenedArtists] = useState(myArtists);

  console.log(mySongs);

  const findArtistName = (id) => {
    return Object.values(myArtists).map((artist) => {
      if (artist.id === id && artist.id != undefined) {
        return artist.name;
      }
    });
  };

  function getArtistArrayNameOrdened() {
    const copy = Object.values(myArtists);
    const sortedData = copy.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    setOrdenedArtists(sortedData);
  }

  function sortBySongName() {
    const copy = Object.values(mySongs);
    const sortedData = copy.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    setFinalSongs(sortedData);
  }

  function sortByArtistName() {
    const copy = Object.values(mySongs);
    const sortedData = copy.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    setFinalSongs(sortedData);
  }

  function sortByArtistId() {
    const copy = Object.values(mySongs);
    const sortedData = copy.sort((a, b) => {
      if (a.artistId < b.artistsId) {
        return -1;
      }
      if (a.artistId > b.artistId) {
        return 1;
      }
      return 0;
    });
    setFinalSongs(sortedData);
  }

  function sortByYear() {
    const copy = Object.values(mySongs);
    const sortedData = copy.sort((a, b) => {
      if (a.year < b.year) {
        return -1;
      }
      if (a.year > b.year) {
        return 1;
      }
      return 0;
    });
    setFinalSongs(sortedData);
  }

  return (
    <>
      <div className="songsPage-container">
        <div className="filters">
          <button className="sorters" onClick={() => sortByArtistId()}>
            By Artist Id
          </button>
          <button className="sorters" onClick={() => sortByYear()}>
            By Year
          </button>
          <button className="sorters" onClick={() => sortBySongName()}>
            By Song name
          </button>
          <button className="sorters" onClick={() => sortByArtistName()}>
            By Artist name
          </button>
          <div className="add-song">
          <div className="add-song-text">
            <button onClick={() => setShow(true)}>Add Song</button>
          </div>
        </div>
      
        </div>
        <div className="list">
          {Object.entries(finalSongs).map(([keys, values]) => {
            return <Song song={values} id={keys} />;
          })}
        </div>
      </div>
      {show && <Modal show={show} method={setShow} />}
    </>
  );
};

export default SongsPage;
