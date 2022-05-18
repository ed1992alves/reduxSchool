import React, { useState, useRef, useEffect } from "react";
import { StyledButton, DropdownList } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { currentGenre } from "../../redux/reducer/selectors";
import {X} from "../Dropdown/styles";

const Dropdown = ({ text, setOption, options }) => {
  const selectedGenre = useSelector(currentGenre);
  const [value, setValue] = useState(selectedGenre);
  const [scale, setScale] = useState(0);
  const dispatch = useDispatch();
  const wrapperRef = useRef(null);

  const scaleDropdownList = () => {
    setScale(scale === 0 ? 1 : 0);
  };

  const handleClick = (val) => {
    setValue(val);
    setOption(val);
    scaleDropdownList();
    dispatch({ type: "SET_CURRENT_GENRE", currentGenre: val });
  };

  useEffect(() => {
    //CLICKED OUTSIDE OF ELEMENT
    const handler = (event) => {
      if (
        scale === 1 &&
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target)
      ) {
        setScale(0);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [wrapperRef, scale]);

  return (
    <X ref={wrapperRef}>
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
    </X>
  );
};

export default Dropdown;
