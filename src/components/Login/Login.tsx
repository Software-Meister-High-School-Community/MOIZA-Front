import React from "react";
import SubmitButton from "../Common/Button/SubmitButton";
import * as L from "./Login.style";
import LoginForm from "./LoginForm";

const Login: React.FC = () => {
  return (
    <L.LoginBox>
      <L.LoginTitle>로그인</L.LoginTitle>
      <LoginForm />
      <L.LoginSubmitButtonWrap>
        <SubmitButton
          big
          text={"로그인"}
          blue
          handleClick={() => console.log("sadadsa")}
        />
      </L.LoginSubmitButtonWrap>
    </L.LoginBox>
  );
};

export default Login;
