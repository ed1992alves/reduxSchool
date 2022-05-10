import React, { useRef } from "react";
import { useNavigate } from "react-router";
import { BackgroundImageDiv, CenteredColumnDiv } from "../global-styles";
import AjustableForm from "../AjustableForm";
import axios, { AxiosResponse } from "axios";

const Register = () => {
  const usernameRef = useRef({ value: "" });
  const emailRef = useRef({ value: "" });
  const passwordRef = useRef({ value: "" });
  const passwordRef2 = useRef({ value: "" });
  const navigate = useNavigate();

  const onClick = () => {
    const handleCorrectInput = (response: AxiosResponse<any, any>) => {
      document.cookie = response.data.cookie;
      localStorage.setItem("username", response.data.username.toUpperCase());
      navigate("/");
    };

    let username = usernameRef.current.value;
    let email = emailRef.current.value;
    let password = passwordRef.current.value;
    let password2 = passwordRef2.current.value;

    if (password === password2) {
      axios
        .post("http://localhost:4000/new", {
          username: username,
          email: email,
          password: password,
        }, {withCredentials: true})
        .then((response) => {
          response.data.status === 200
            ? handleCorrectInput(response)
            : alert(response.data.message);
        });
    } else {
      passwordRef.current.value = "";
      passwordRef2.current.value = "";
      alert("Passwords do not match!");
    }
  };

  return (
    <BackgroundImageDiv>
    <CenteredColumnDiv>
      <AjustableForm
        fields={[
          { text: "Username", type: "text", ref: usernameRef },
          { text: "Email", type: "text", ref: emailRef },
          { text: "Password", type: "password", ref: passwordRef },
          { text: "Confirm Password", type: "password", ref: passwordRef2 },
        ]}
        onClick={onClick}
      />
    </CenteredColumnDiv>
    </BackgroundImageDiv>
  );
};

export default Register;
