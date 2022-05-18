import React, { useState } from "react";
import { X } from "../DropdownContainer/styles";
import GenreDpDwn from "../GenreDpDwn/index";

const NatDpdnCont = ({ options }) => {

  return (
    <X>
      <NatDropdown options={options}/>
    </X>
  );
};

export default NatDpdnCont;

