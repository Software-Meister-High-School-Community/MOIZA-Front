import React from "react";
import SubmitButton from "../Common/Button/SubmitButton";
import { LoginBox, LoginSubmitButtonWrap, LoginTitle } from "./Login.style";
import LoginForm from "./LoginForm";

const Login: React.FC = () => {
  return (
    <LoginBox>
      <LoginTitle>로그인</LoginTitle>
      <LoginForm />
      <LoginSubmitButtonWrap>
        <SubmitButton
          big
          text={"로그인"}
          blue
          disable
          handleClick={() => console.log("sadadsa")}
        />
      </LoginSubmitButtonWrap>
    </LoginBox>
  );
};

export default Login;
