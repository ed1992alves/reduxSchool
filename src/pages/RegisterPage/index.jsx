import React, { useRef, useEffect } from "react";
import AjustableForm from "../../components/AjustableForm/index";
import { useDispatch } from "react-redux";
import "./index.scss";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const artistNameRef = useRef({ value: "" });
  const ageRef = useRef({ value: "" });
  const emailRef = useRef({ value: "" });
  const cityRef = useRef({ value: "" });
  const nationalityRef = useRef({ value: "" });
  const photoRef = useRef({ value: "" });

  
  const genresDropdownRef = useRef({ value: "" });


  const handleClick = () => {
    let genre = [];
    genres.forEach((el) => {
      el.current.checked && genre.push(el.current.name);
    });
    let newArtist = {};
    newArtist.name = artistNameRef.current.value;
    newArtist.age = ageRef.current.value;
    newArtist.city = cityRef.current.value;
    newArtist.nationality = nationalityRef.current.value;
    newArtist.email = emailRef.current.value;
    newArtist.photo = photoRef.current.value;
    newArtist.genre = genre;
    console.log(newArtist);
    dispatch({ type: "SET_NEW_ARTIST", newArtist });
  };

  return (
    <div className="register-container">
      <AjustableForm
        fields={[
          { text: "Artist Name", type: "text", ref: artistNameRef },
          { text: "Age", type: "number", ref: ageRef },
          { text: "Email", type: "text", ref: emailRef },
          { text: "City", type: "text", ref: cityRef },
          { text: "Photo URL", type: "text", ref: photoRef },
        ]}
        
        handleClick={handleClick}
        submitButtonText={"Submit Artist"}
      />
    </div>
  );
};

export default RegisterPage;
