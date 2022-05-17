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

  const [artistSelect, setArtistSelected] = useState("");
  const [mySong, setMySong] = useState([]);
  const [album, setAlbum] = useState("");
  const [image, setImage] = useState("");
  const [newSong, setNewSong] = useState({});


  const songInfo = (e) => {
  


   console.log(newSong);


    switch (e.target.name) {
      case "name":
       // return setNewSong(value => {return {...value, name: e.target.value}});
       return setNewSong({...newSong, name: e.target.value});
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

    console.log(artistSelect);
 
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
          setNewSong({ ...newSong, artistId: selectedArtist.id });
        }
      });

    setMySong(sings);

    

  }, [artistSelect]);



  const methodx = (x) => {
    setAlbum(x);
    console.log(artistSelect)
    setNewSong({ ...newSong, artistId: artistSelect.id });
    setArtistSelected("");
  };

  console.log(newSong)

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
            <input name="name" placeholder="Name" onChange={(e) => songInfo(e)} required />

            <label>Artist Name: </label>
            <ArtistSearchBar setArtistSelected={setArtistSelected} />

            <label>Album: </label>
            <input name="album" value={album} onBlur={(e) => songInfo(e)} placeholder="Album" required onChange={(e) => methodx(e.target.value)}></input>

            <div className="album-dropdown">
              {artistSelect !== undefined  &&
                mySong.map((element) => {
                  return (
                    <div
                      className="album-dropdown-button"
                      onClick={() => methodx(element.album)}
                    >
                      {element.album}
                    </div>
                  );
                })}
            </div>


            <GenreDropdown songInfo={songInfo} />

            <label>Year: </label>
            <input
              className="date"
              pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}"
              type="date"
              onBlur={(e) => songInfo(e)}
              placeholder="dd-mm-yyyy"
              required
            />


            <label>Album Art: </label>
            <input
              onChange={(e) => setImage(e.target.value)}
              type="text"
              placeholder="Image-Url"
              onBlur={(e) => songInfo(e)}
              required
            />
            <img
              className="imageTest"
              src={image}
              onError={() =>
                setImage(
                  image === ""
                    ? ""
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2e6NnqxKyp5xaTWQCafRIOOwDxKU01hbtJScTgrV-5A0kP4eJ9sggdlTtnxbJlXN6AN4&usqp=CAU"
                )
              }
            ></img>
          </div>
          <div className="button-submit">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};
