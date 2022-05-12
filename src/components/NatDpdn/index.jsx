import React, { useState } from "react";
import { StyledButton, DropdownList } from "./styles";

const NatDropdown = ({options, ref }) => {
  const [value, setValue] = useState("Nationality");
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
      <button ref={ref} onClick={() => scaleDropdownList()} className="dropdown-btn">
        {value}
      </button>
      <div scale={scale}> 
        {options.map((el) => (
          <button
            key={el}
            active={el === value}
            onClick={() => handleClick(el)}
          >
            {el}
          </button>
        ))}
      </div>
    </>
  );
};

export default NatDropdown;
