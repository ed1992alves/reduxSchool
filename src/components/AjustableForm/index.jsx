import React from "react";
import { FormInput, FormButton } from "./form-styles";

const AjustableForm = ({ fields, handleClick, checkbox, submitButtonText }) => {
  return (
    <>
      {fields.map((e) => (
        <FormInput
          key={e + String(Math.random())}
          type={e.type}
          placeholder={e.text}
          ref={e.ref}
        />
      ))}
      <div>
        {checkbox.map((e) => (
          <div key={e + String(Math.random())}>
            <input type="checkbox" name={e.text} value={e.text} ref={e.ref}/>
            <label htmlFor={e.text}>{e.text}</label>
            <br/>
          </div>
        ))}
      </div>
      <FormButton onClick={handleClick}>{submitButtonText}</FormButton>
    </>
  );
};

export default AjustableForm;
