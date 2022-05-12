import React from "react";
import { useSelector } from "react-redux";
import { filterGenreName } from "../../../../redux/reducer/selector";

export const GenreDropdown = () => {
  const selector = useSelector(filterGenreName);

    const handleSubmit = () => {
        console.log("teste 123")
        return (
        selector.map((genre) => {
            return (
              <div className="genre-dropdown-option">
                <p>{genre}</p>
              </div>
            );
          })
        )
    }

  return (
    <>
      <div className="genre-dropdown" onClick={handleSubmit}>Genre: </div>
    </>
  );
};
