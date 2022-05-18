import React from "react";
import "./index.scss";
import NatDpdnCont from "../NatDpdnCont/index";
import nationalitiesArr from "../../utils/nationalities";


const AjustableForm = ({ fields, handleClick, submitButtonText }) => {


  return (
    <div className="form-container">
      {fields.map((e) => (
        <input
          className={e.type === "number" ? "form-input hide-arrows": "form-input"}
          key={e + String(Math.random())}
          type={e.type}
          placeholder={e.text}
          ref={e.ref}
        />
      ))}
      <NatDpdnCont options={nationalitiesArr}/>
      
      <button onClick={handleClick} className="form-buttom">{submitButtonText}</button>
    </div>
  );
};

export default AjustableForm;
