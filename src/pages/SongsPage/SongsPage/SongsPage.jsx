
import { useSelector } from "react-redux";
import "./SongsPage.scss";
import { Song } from "../components/song/Song";
import React, { useState } from "react";
import { Modal } from "../components/modal";


const SongsPage = () => {

  const [show, setShow] = useState(false);
  const songs = useSelector((state) => state.songs);
  
  

  return (
    <>
      <div className="songsPage-container">
        <div className="add-song">
          <div className="add-song-text">
            <button onClick={() => setShow(true)}>Add Song</button>
          </div>
        </div>
        <div className="list">
          {Object.entries(songs).map(([keys, values]) => {
            return <Song song={values} id={keys} />;
          })}
        </div>
      </div>
      {show && <Modal show= {show} method={setShow}/>}
     
    </>
  );
};

export default SongsPage;
