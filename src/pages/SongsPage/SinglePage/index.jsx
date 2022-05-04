import { useParams } from "react-router-dom";
import "./style.scss";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export const SinglePage = () => {
  const songs = useSelector((state) => state.songs);
  const { id } = useParams();
  const artists = useSelector((state) => state.artists)

  console.log(artists)

  const data = Object.entries(songs).find(([keys, values]) => id === keys)[1];

  const filteredArtist = Object.entries(artists)

  console.log(filteredArtist)

  const filterMyArtist = () => {
    return filteredArtist.filter((artist) => artist[1].id === data.artistId)[0][1]
  }

  

  return (
    <div
      className="single-page"
      style={ {  background: `linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url("${data.albumArt}")`}}
    >
      <div className="albumImage"></div>
      <div className="Info">
      <div className="container" style={{  background: `url("${filterMyArtist().photo}")` , backgroundSize:"cover"}} >
   
   <div className="container__profile">
    <img
     src= {data.albumArt}
     alt="people"
    />
    <div className="container__profile__text">
     <h2>{data.name}</h2>
     <p className="artist-name-by">by <b>{filterMyArtist().name}</b></p>
    </div>
   </div>
  </div>
      </div>
    </div>
  );
};
