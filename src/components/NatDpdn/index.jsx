import React, { useState, useRef, useEffect } from "react";
import { StyledButton, DropdownList } from "./styles";
import { X } from "../DropdownContainer/styles";

const NatDropdown = ({options, ref }) => {
  const [value, setValue] = useState("Nationality");
  const [scale, setScale] = useState(0);
  const wrapperRef = useRef(null);

  const scaleDropdownList = () => {
    setScale(scale === 0 ? 1 : 0);
  };

  const handleClick = (val) => {
    setValue(val);
    scaleDropdownList();
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
      <StyledButton ref={ref} onClick={() => scaleDropdownList()}>
        {value}
      </StyledButton>
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

export default NatDropdown;
