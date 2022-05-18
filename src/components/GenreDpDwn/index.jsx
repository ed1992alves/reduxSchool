import React, { useState } from "react";
import { StyledButton, DropdownList } from "./styles";

const GenreDpDwn = ({options, ref }) => {
  const [value, setValue] = useState("Genre");
  const [scale, setScale] = useState(0);

  const scaleDropdownList = () => {
    setScale(scale === 0 ? 1 : 0);
  };

  const handleClick = (val) => {
    setValue(val);
    scaleDropdownList();
  };

  return ( 
    <>
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
    </>
  );
};

export default GenreDpDwn;
