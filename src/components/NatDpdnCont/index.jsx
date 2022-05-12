import React, { useState } from "react";
import { X } from "../DropdownContainer/styles";
import NatDropdown from "../NatDpdn";

const NatDpdnCont = ({ options }) => {

  return (
    <X>
      <NatDropdown options={options}/>
    </X>
  );
};

export default NatDpdnCont;

