import React, { useState } from "react";
import { X } from "./styles";
import Dropdown from "../Dropdown";
import { useSelector } from "react-redux";
import { currentGenre } from "../../redux/reducer/selectors";

const DropdownContainer = ({ options }) => {
  const selectedGenre = useSelector(currentGenre);
  const [option, setOption] = useState("all");
  const [text] = useState("Filter by Genres");

  return (
    <X>
      <h2 style={{ marginTop: "30px" }}>Selected Option: {option}</h2>
      <Dropdown text={text} options={options} setOption={setOption} />
    </X>
  );
};

export default DropdownContainer;
