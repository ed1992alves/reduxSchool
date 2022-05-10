import React, { MutableRefObject } from "react";
import { FormInput, FormButton } from "./form-styles";

type Field = {
  text: string;
  type: string;
  ref: MutableRefObject<{ value: string; }>;
  
};

const AjustableForm = ({ fields, onClick }: {fields: Field[], onClick: () => void} ) => {

  

  return (
    <>
        {fields.map((e: Field) => (
          <FormInput
            key={e + String(Math.random())}
            type={e.type}
            placeholder={e.text}
            ref={e.ref}
          />
        ))}
        <FormButton onClick={onClick}>Login</FormButton>
    </>
  );
};

export default AjustableForm;
