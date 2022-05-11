import React, { useRef, useEffect } from "react";
import AjustableForm from "../../components/AjustableForm/index";
import { useDispatch } from "react-redux";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const artistNameRef = useRef({ value: "" });
  const ageRef = useRef({ value: "" });
  const emailRef = useRef({ value: "" });
  const cityRef = useRef({ value: "" });
  const nationalityRef = useRef({ value: "" });
  const photoRef = useRef({ value: "" });

  const folkloreRef = useRef({ value: "" });
  const ppmRef = useRef({ value: "" });
  const popRef = useRef({ value: "" });
  const hipHopRef = useRef({ value: "" });
  const randbRef = useRef({ value: "" });
  const emoRapRef = useRef({ value: "" });
  const popRapRef = useRef({ value: "" });
  const trapTugaRef = useRef({ value: "" });
  const indiePopRef = useRef({ value: "" });
  const alternativePopRef = useRef({ value: "" });
  const indieRockRef = useRef({ value: "" });
  const rockRef = useRef({ value: "" });
  const hardRockRef = useRef({ value: "" });
  const alternativeRockRef = useRef({ value: "" });
  const glamRockRef = useRef({ value: "" });
  const hardcoreSireneDosBombeirosRef = useRef({ value: "" });

  const genres = [
    folkloreRef,
    ppmRef,
    popRef,
    hipHopRef,
    randbRef,
    emoRapRef,
    popRapRef,
    trapTugaRef,
    indiePopRef,
    alternativePopRef,
    indieRockRef,
    rockRef,
    hardRockRef,
    alternativeRockRef,
    glamRockRef,
    hardcoreSireneDosBombeirosRef,
  ];

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
    alert("Artist created!");
  };

  return (
    <div>
      <div>
        <AjustableForm
          fields={[
            { text: "Artist Name", type: "text", ref: artistNameRef },
            { text: "Age", type: "number", ref: ageRef },
            { text: "Email", type: "text", ref: emailRef },
            { text: "City", type: "text", ref: cityRef },
            { text: "Nationality", type: "text", ref: nationalityRef },
            { text: "Photo URL", type: "text", ref: photoRef },
          ]}
          checkbox={[
            { text: "folklore", ref: folkloreRef },
            { text: "portuguese popular music", ref: ppmRef },
            { text: "pop", ref: popRef },
            { text: "hip-hop", ref: hipHopRef },
            { text: "r&b", ref: randbRef },
            { text: "emo rap", ref: emoRapRef },
            { text: "pop-rap", ref: popRapRef },
            { text: "trap-tuga", ref: trapTugaRef },
            { text: "indie pop", ref: indiePopRef },
            { text: "alternative pop", ref: alternativePopRef },
            { text: "indie rock", ref: indieRockRef },
            { text: "rock", ref: rockRef },
            { text: "hard rock", ref: hardRockRef },
            { text: "alternative rock", ref: alternativeRockRef },
            { text: "glam rock", ref: glamRockRef },
            {
              text: "hardcore sirene dos bombeiros",
              ref: hardcoreSireneDosBombeirosRef,
            },
          ]}
          handleClick={handleClick}
          submitButtonText={"Submit Artist"}
        />
      </div>
    </div>
  );
};

export default RegisterPage;
