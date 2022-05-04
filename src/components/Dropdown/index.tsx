import React, {useState} from "react";

const Dropdown = ({text, setOption, options}) => {

    const [value, setValue] = useState("None");
    const [scale, setScale] = useState(0);

    const scaleDropdownList = () => {
        setScale(scale === 0 ? 1: 0);
    }

    const handleClick = (val: string) => {
        setValue(val);
        setOption(val);
        scaleDropdownList();
    }
}


