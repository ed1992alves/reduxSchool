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
  const [ordenedArtists, setOrdenedArtists] = useState(myArtists);

  function sortBySongName() {
    const copy = Object.values(mySongs);

    const sortedData = copy.sort((a, b) => a.name.localeCompare(b.name));

    setFinalSongs(sortedData);
  }

  function sortByArtistName() {
    const copyArtists = Object.values(myArtists).sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    const copySongs = Object.values(mySongs);

    let array = [];

    copyArtists.map((e) => {
      copySongs.map((f) => {
        if (e.id === f.artistId) {
          array.push(f);
        }
      });
    });
    setFinalSongs(array);
  }

  function sortByArtistId() {
    const copy = Object.values(mySongs);
    const sortedData = copy.sort((a, b) => a.artistId - b.artistId);
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
