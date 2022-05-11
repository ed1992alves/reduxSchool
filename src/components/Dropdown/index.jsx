import React, { useState } from "react";
import { StyledButton, DropdownList } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import {currentGenre} from "../../redux/reducer/selectors"

const Dropdown = ({ text, setOption, options }) => {
  const [value, setValue] = useState("all");
  const [scale, setScale] = useState(0);
  const dispatch = useDispatch();
  const selectedGenre = useSelector(currentGenre);

  const scaleDropdownList = () => {
    setScale(scale === 0 ? 1 : 0);
  };

  const handleClick = (val) => {
    setValue(val);
    setOption(val);
    scaleDropdownList();
    dispatch({ type: "SET_CURRENT_GENRE", currentGenre: val });
    
  };

  return (
    <>
      <div>{text}</div>
      <StyledButton onClick={() => scaleDropdownList()}>{value}</StyledButton>
      <DropdownList scale={scale}>
        {options.map((el) => (
          <StyledButton
            key={el}
            active={el === value}
            onClick={() => handleClick(el)}
          >
            {el}
          </StyledButton>
        ))}
      </DropdownList>
    </>
  );
};

export default Dropdown;
