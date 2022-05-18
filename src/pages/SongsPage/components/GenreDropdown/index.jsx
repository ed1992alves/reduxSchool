import React, { useState } from "react";
import { useSelector } from "react-redux";
import { filterGenreName } from "../../../../redux/reducer/selector";
import './style.scss'

export const GenreDropdown = ({songInfo}) => {
  const selector = useSelector((state) => state.genre);
  const [showGenre, setShowGenre] = useState(false);
  const [newGenre, setNewGenre] = useState("");

  const handleGenre = () => {
    setShowGenre(!showGenre);
  };

  const handleInput = (e) => {
    setNewGenre(e.target.value);
  }

  return (
    <>
      <div className="genre-dropdown">
        <label>Genre:</label>
        <input
          name="genre"
          autoComplete="off"
          onClick={handleGenre}
          value={newGenre}
          onBlur={(e) => songInfo(e)}
          onChange={(e) => {
            handleInput(e);
            songInfo(e);
          }}
          placeholder="Genre"
          required
          
        />


        <div className="results">
        {showGenre &&
          selector.map((genre) => {
            return (
              <div className="results-line" onClick={(e) => {setNewGenre(genre); songInfo(e) ; handleGenre()}}>
                <p>{genre}</p>
              </div>
            );
          })}
          </div>
      </div>
    </>
  );
};
