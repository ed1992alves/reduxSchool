
import { useSelector } from "react-redux";
import "./SongsPage.scss";
import { Song } from "../components/song/Song";
import React from "react";


const SongsPage = () => {

 
  const songs = useSelector((state) => state.songs);
  


  

  return (
    <>
      <div className="songsPage-container">
        <div className="add-song">
          <div className="add-song-text">
            <button>Add Song</button>
          </div>
        </div>
        <div className="list">
          {Object.entries(songs).map(([keys, values]) => {
            return <Song song={values} id={keys} />;
          })}
        </div>
      </div>

     
    </>
  );
};

export default SongsPage;
