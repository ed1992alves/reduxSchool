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
    const sortedData = copy.sort((a, b) => 
      a.name.localeCompare(b.name));

    setFinalSongs(sortedData);
  }

  function sortByArtistName() {
    /* const copy = Object.values(mySongs);
    const sortedData = copy.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    setFinalSongs(sortedData); */
    /* 
    const copySongs = Object.values(mySongs);
    const copyArtists = Object.entries(myArtists);

    let addArtistSongs = [];

    copySongs.map((element) => {
      copyArtists.map((elem) => {
        if (element.artistId == elem[0]) {
          console.log("entrei");
          addArtistSongs.push({ ...element, artistName: elem[1].name });
        }
      });
    });
    const sortedData = addArtistSongs.sort((a, b) => {
      if (a.artistName < b.artistName) {
        return -1;
      }
      if (a.artistName > b.artistName) {
        return 1;
      }
      return 0;
    });
    setFinalSongs(sortedData); */

    const copyArtists = Object.values(myArtists).sort((a, b) =>  a.name.localeCompare(b.name));
    const copySongs = Object.values(mySongs);

    let array = [];

    copyArtists.map((e) => {
      copySongs.map((f) => {
        if (e.id === f.artistId) {
          array.push(f)
        }
      });
    });
    setFinalSongs(array);
  
  }

  function sortByArtistId() {
    const copy = Object.values(mySongs);
    const sortedData = copy.sort((a, b) =>  a.artistId -b.artistId);
    setFinalSongs(sortedData);
  }

  function sortByYear() {
    const copy = Object.values(mySongs);
    const sortedData = copy.sort((a, b) => a.year - b.year);
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
        </div>
        <div className="add-song">
          <div className="add-song-text">
            <button onClick={() => setShow(true)}>Add Song</button>
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
