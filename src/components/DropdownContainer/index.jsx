import React, {useState} from "react";
import {X} from "./styles";
import Dropdown from "../Dropdown"

const DropdownContainer = ({options}) => {

    const [option, setOption] = useState("none");
    const [text] = useState("Filter by Genres");

    return (
        <X>
          <h2 style={{marginTop: "30px", }}>Selected Option: {option}</h2>
          <Dropdown text={text} options={options} setOption={setOption}/>
        </X>  
    )
}

export default DropdownContainer;