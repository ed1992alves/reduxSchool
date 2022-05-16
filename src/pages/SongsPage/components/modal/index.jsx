import "./style.scss";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addSong } from "../../../../redux/reducer/actions";
import { useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { ArtistSearchBar } from "../ArtistNameSearchBar";
import { GenreDropdown } from "../GenreDropdown";

export const Modal = ({ show, method }) => {
  const songs = useSelector((state) => state.songs);
  const artist = useSelector((state) => state.artists);

  const [artistSelect, setArtistSelected] = useState();
  const [mySong, setMySong] = useState([]);

  const [newSong, setNewSong] = useState({
    name: "",
    album: "",
    albumArt: "",
    artistId: "",
    year: "",
    genre: "",
  });

  const songInfo = (e) => {
    switch (e.target.name) {
      case "name":
        return setNewSong({ ...newSong, name: e.target.value });

      case "artist":
        return setNewSong({ ...newSong, artist: e.target.value });

      case "album":
        return setNewSong({ ...newSong, album: e.target.value });
      case "albumArt":
        return setNewSong({ ...newSong, albumArt: e.target.value });
      case "year":
        return setNewSong({ ...newSong, year: e.target.value });
      case "genre":
        return setNewSong({ ...newSong, genre: e.target.value });
    }
  };

  const dispatch = useDispatch();

  const myDispatch = () => {
    dispatch(addSong(newSong));
  };

  useEffect(() => {
    let selectedArtist;
    Object.values(artist).map((art) => {
      if (art.name === artistSelect) {
        selectedArtist = art;
      }
    });
    const sings = [];
    selectedArtist !== undefined &&
      Object.values(songs).filter((son) => {
        if (son.artistId == selectedArtist.id) {
          sings.push(son);
        }
      });
    setMySong(sings);
  }, [artistSelect]);

  console.log(mySong);

  return (
    <div className="modal">
      <div className="modal-box">
        <div className="modal-box-header">
          <h3>Add Song</h3>
          <IoMdClose
            size={30}
            onClick={() => method(false)}
            className="close-modal"
          />
        </div>
        <form
          onSubmit={() => {
            myDispatch();
            method(false);
          }}
        >
          <div className="modal-box-body">
            <label>Name: </label>
            <input placeholder="Name" required />

            <label>Artist Name: </label>
            <ArtistSearchBar setArtistSelected={setArtistSelected} />
            <GenreDropdown />
            <label>Year: </label>
            <input type="number" placeholder="Year" required />

            <label>Album: </label>
            <input></input>
            <div className="album-dropdown">
            {mySong !== [] &&
                mySong.map((element) => {
                  return <button>{element.album}</button>
                })}
            </div>

            <label>Album Art: </label>
            <input type="text" placeholder="Image-Url" required />
          </div>

          <div className="button-submit">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};
