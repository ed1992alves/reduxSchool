import './style.scss';
import React, { useState } from 'react';
import { BsPlayFill } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export const Song = ({song, id}) =>{

    const navigate = useNavigate();
    const [showPlay, setShowPlay] = useState(false);    
    const artists = useSelector((state) => state.artists);

    const findArtistName = (id) => {
        return Object.values(artists).map((artist) => {
          if (artist.id === id && artist.id != undefined) {
            return  artist.name;
          }
        });
      };

    return(
        <div className="song" onMouseLeave={()=> setShowPlay(false)} onMouseOver={() => setShowPlay(true)}>
        <div className="id">{showPlay ? <BsPlayFill size={25} /> : id}</div>
        <div onClick={() => navigate(`/songs/${id}`)} className="img">
          <img src={song.albumArt} width="70px" height="70px" />
        </div>
        <div className="name-info">
          <div className="name-artist">
            {findArtistName(song.artistId)}
          </div>
          <div className="name-music">
            <p>{song.name}</p>
          </div>
        </div>
        <div className="album">
          <p>{song.album}</p>
        </div>
        <div className="year">
          <p>{song.year}</p>
        </div>
        
      </div>
    );
}