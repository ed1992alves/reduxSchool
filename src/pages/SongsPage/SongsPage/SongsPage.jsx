import { useSelector } from "react-redux";
import "./SongsPage.scss";
import { Song } from "../components/song/Song";
import React, { useState } from "react";
import { Modal } from "../components/modal";
import { AiOutlineSortAscending } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BsSortNumericDown } from "react-icons/bs";

const SongsPage = () => {
  const [show, setShow] = useState(false);
  const mySongs = useSelector((state) => state.songs);
  const myArtists = useSelector((state) => state.artists);
  const [finalSongs, setFinalSongs] = useState(mySongs);

  function sortBySongName() {
    const copy = Object.entries(mySongs);
    const sortedData = copy.sort((a, b) => a[1].name.localeCompare(b[1].name));
    let obj = {};
    sortedData.map((e, i) => {
      obj = { ...obj, [i + 1]: e[1] };
    });
    setFinalSongs(obj);
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

    const copyArtists = Object.values(myArtists).sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    const copySongs = Object.entries(mySongs);

    let array = {};
    let i = 1;

    copyArtists.map((e) => {
      copySongs.map((f) => {
        if (e.id == f[1].artistId) {
          array = { ...array, [i]: f[1] };
          i++;
        }
      });
    });

    setFinalSongs(array);
  }

  function sortByArtistId() {
    const copy = Object.entries(mySongs);
    const sortedData = copy.sort((a, b) => a[1].artistId - b[1].artistId);
    let obj = {};
    sortedData.map((e, i) => {
      obj = { ...obj, [i + 1]: e[1] };
    });
    setFinalSongs(obj);
  }
  function sortByYear() {
    const copy = Object.entries(mySongs);
    const sortedData = copy.sort((a, b) => a[1].year - b[1].year);
    let obj = {};
    sortedData.map((e, i) => {
      obj = { ...obj, [i + 1]: e[1] };
    });
    setFinalSongs(obj);
  }

  const idSelector = (value) => {
    let myKey;
    Object.entries(mySongs).map(([keys, values]) => {
      if (value.name === values.name) {
        myKey = keys;
      }
    });
    return myKey;
  };

  return (
    <>
      <div className="songsPage-container">
        <div className="filters">
          <div className="sortersDiv">
            <span className="sortSpan">Artist ID</span>
            <BsSortNumericDown
              size={40}
              onClick={() => sortByArtistId()}
              className="sorterIcon"
            />
          </div>
          <div className="sortersDiv">
            <span className="sortSpan">Year</span>
            <BsSortNumericDown
              size={40}
              onClick={() => sortByYear()}
              className="sorterIcon"
            />
          </div>
          <div className="sortersDiv">
            <span className="sortSpan">Song</span>
            <AiOutlineSortAscending
              size={40}
              onClick={() => sortBySongName()}
              className="sorterIcon"
            />
          </div>
          <div className="sortersDiv">
            <span className="sortSpan">Artist</span>
            <AiOutlineSortAscending
              size={40}
              onClick={() => sortByArtistName()}
              className="sorterIcon"
            />
          </div>
          <div className="add-song">
            <div className="add-song-text">
              <button onClick={() => setShow(true)}>Add Song</button>
            </div>
          </div>
        </div>
        <div className="list">
          {Object.values(finalSongs).map((values) => {
            return <Song song={values} id={idSelector(values)} />;
          })}
        </div>
      </div>
      {show && <Modal show={show} method={setShow} />}
    </>
  );
};

export default SongsPage;
