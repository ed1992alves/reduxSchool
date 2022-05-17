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
          onClick={handleGenre}
          value={newGenre}
          onBlur={(e) => songInfo(e)}
          onChange={handleInput}
          required
          placeholder="Genre"
        />


        <div className="results">
        {showGenre &&
          selector.map((genre) => {
            return (
              <div className="results-line" onClick={() => {setNewGenre(genre); handleGenre()}}>
                <p>{genre}</p>
              </div>
            );
          })}
          </div>
      </div>
    </>
  );
};
