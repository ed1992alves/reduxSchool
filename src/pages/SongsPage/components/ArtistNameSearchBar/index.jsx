import "./style.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import React from "react";
import { filterArtistName } from "../../../../redux/reducer/selector";

export const ArtistSearchBar = ({ setArtistSelected }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const selectorArtists = useSelector(filterArtistName);

  const handleSubmit = (e) => {
    const value = e.target.value;
    console.log(value);
    setWordEntered(value);

    const filteredData = selectorArtists.filter((artist) => {
      return artist.toLowerCase().includes(value.toLowerCase());
    });

    if (value === "") {
      setFilteredData([]);
    } else {
      setFilteredData(filteredData);
    }
  };

  const chooseOption = (option) => {
    setWordEntered(option);
    setArtistSelected(option);
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="artist-search-bar">
      <input
        type="text"
        value={wordEntered}
        onChange={handleSubmit}
        placeholder="Search ..."
        required
      />

      <div className="results">
        {filteredData.slice(0, 15).map((artist) => {
          return (
            <div
              onClick={() => {
                chooseOption(artist), setFilteredData([]);
              }}
              className="result-line"
            >
              <p>{artist}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
