import React from "react";
import "./index.scss";
import NatDpdnCont from "../NatDpdnCont/index";
import nationalitiesArr from "../../utils/nationalities";

const AjustableForm = ({ fields, handleClick, checkbox, submitButtonText }) => {
  return (
    <div className="form-container">
      {fields.map((e) => (
        <input
          className="form-input"
          key={e + String(Math.random())}
          type={e.type}
          placeholder={e.text}
          ref={e.ref}
        />
      ))}
      <NatDpdnCont options={nationalitiesArr}/>
      <div className="form-checkboxes">
        {checkbox.map((e) => (
          <div key={e + String(Math.random())} className="checkbox">
            <input type="checkbox" name={e.text} value={e.text} ref={e.ref} />
            <label htmlFor={e.text}>{e.text}</label>
            <br />
          </div>
        ))}
      </div>
      <button onClick={handleClick} className="form-buttom">{submitButtonText}</button>
    </div>
  );
};

export default AjustableForm;
