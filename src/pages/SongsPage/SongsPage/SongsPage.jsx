import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./SongsPage.scss";
import { Song } from "../components/Song";

const SongsPage = () => {
 
  const songs = useSelector((state) => state.songs);
 
  return (
    <div className="songsPage-container">
      <div className="list">
        {Object.entries(songs).map(([keys, values]) => {
          return (
             <Song song={values} id={keys}/>
          );
        })}
      </div>
    </div>
  );
};

export default SongsPage;
