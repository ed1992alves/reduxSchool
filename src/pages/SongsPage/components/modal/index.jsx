import "./style.scss";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSong } from "../../../../redux/reducer/actions";
import { useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { ArtistSearchBar } from "../ArtistNameSearchBar";
import { GenreDropdown } from "../GenreDropdown";

export const Modal = ({ show, method }) => {
  const songs = useSelector((state) => state.songs);

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
    console.log("caga");
    dispatch(addSong(newSong));
  };

  console.log(songs);

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
            <ArtistSearchBar />
            <GenreDropdown />
            <label>Year: </label>
            <input type="number" placeholder="Year" required />

            <label>Album: </label>

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
