import React from "react";
import "./index.scss";
import NatDpdnCont from "../NatDpdnCont/index";
import nationalitiesArr from "../../utils/nationalities";
import GenreDpDwnCont from "../GenreDpDwnCont";


const genres = [
  "Folklore",
  "Portuguese popular music",
  "Pop",
  "HipHop",
  "R&B",
  "Emo Rap",
  "Pop Rap",
  "Trap Tuga",
  "Indie Pop",
  "Alternative pop",
  "Indie Rock",
  "Rock",
  "Hard Rock",
  "Alternative Rock",
  "Glam Rock",
  "HardcoreSB",
];

const AjustableForm = ({ fields, handleClick, submitButtonText }) => {


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
      
      <GenreDpDwnCont options={genres}/>
      <button onClick={handleClick} className="form-buttom">{submitButtonText}</button>
    </div>
  );
};

export default AjustableForm;
