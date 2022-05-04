import React, { useState } from "react";
import { StyledButton, DropdownList } from "./styles";

const Dropdown = ({ text, setOption, options }) => {
  const [value, setValue] = useState("None");
  const [scale, setScale] = useState(0);

  const scaleDropdownList = () => {
    setScale(scale === 0 ? 1 : 0);
  };

  const handleClick = (val) => {
    setValue(val);
    setOption(val);
    scaleDropdownList();
    // dispatch(x);
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
