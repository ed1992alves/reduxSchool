import React, { useRef } from "react";
import { useNavigate } from "react-router";
import AjustableForm from "../../components/AjustableForm/index";

const RegisterPage = () => {
  const nameRef = useRef({ value: "" });
  const emailRef = useRef({ value: "" });
  const cityRef = useRef({ value: "" });
  const nationalityRef = useRef({ value: "" });
  const photoRef = useRef({ value: "" });

  const folkloreRef = useRef({ value: "" });
  const ppmRef = useRef({ value: "" });
  const popRef = useRef({ value: "" });
  const hiphopRef = useRef({ value: "" });
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

  let name;
  let email;
  let city;
  let nationality;
  let photo;

  let isFolklore;
  let isPPM;
  let isPop;
  let isHipHop;
  let isRnB;
  let isEmoRap;
  let isPopRap;
  let isTrapTuga;
  let isIndiePop;
  let isAlternativePop;
  let isIndieRock;
  let isRock;
  let isHardRock;
  let isAlternativeRock;
  let isGlamRock;
  let isHardcoreSireneDosBombeiros;

  useEffect(() => {
    name = nameRef.current.value;
    email = emailRef.current.value;
    city = cityRef.current.value;
    nationality = nationalityRef.current.value;
    photo = photoRef.current.value;

    isFolklore = folkloreRef.current.checked;
    isPPM = ppmRef.current.checked;
    isPop = popRef.current.checked;
    isHipHop = hiphopRef.current.checked;
    isRnB = randbRef.current.checked;
    isEmoRap = emoRapRef.current.checked;
    isPopRap = popRapRef.current.checked;
    isTrapTuga = trapTugaRef.current.checked;
    isIndiePop = indiePopRef.current.checked;
    isAlternativePop = alternativePopRef.current.checked;
    isIndieRock = indieRockRef.current.checked;
    isRock = rockRef.current.checked;
    isHardRock = hardRockRef.current.checked;
    isAlternativeRock = alternativeRockRef.current.checked;
    isGlamRock = glamRockRef.current.checked;
    isHardcoreSireneDosBombeiros =
      hardcoreSireneDosBombeirosRef.current.checked;
  }, [
    nameRef,
    emailRef,
    cityRef,
    nationalityRef,
    folkloreRef,
    ppmRef,
    popRef,
    hiphopRef,
    randbRef,
    emoRapRef,
    popRapRef,
    trapTugaRef,
    indiePopRef,
    alternativePopRef,
    indieRockRef,
  ]);

  const handleClick = () => {
    console.log(isHardcoreSireneDosBombeiros);
  };

  return (
    <div>
      <div>
        <AjustableForm
          fields={[
            { text: "Name", type: "text", ref: nameRef },
            { text: "Email", type: "text", ref: emailRef },
            { text: "City", type: "text", ref: cityRef },
            { text: "Nationality", type: "text", ref: nationalityRef },
            { text: "Photo URL", type: "text", ref: photoRef },
          ]}
          checkbox={[
            { text: "folklore", ref: folkloreRef },
            { text: "portuguese popular music", ref: ppmRef },
            { text: "pop", ref: popRef },
            { text: "hip-hop", ref: hiphopRef },
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
