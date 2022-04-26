import React from "react";
import useLogin from "../../hooks/login/useLogin";
import SubmitButton from "../Common/Button/SubmitButton";
import * as L from "./Login.style";
import LoginForm from "./LoginForm";

const Login: React.FC = () => {
  const { loginData, handleLoginData, submitLoginData } = useLogin();

  return (
    <L.LoginBox>
      <L.LoginTitle>로그인</L.LoginTitle>
      <LoginForm loginData={loginData} handleLoginData={handleLoginData} />
      <L.LoginSubmitButtonWrap>
        <SubmitButton big text={"로그인"} blue handleClick={submitLoginData} />
      </L.LoginSubmitButtonWrap>
    </L.LoginBox>
  );
};

export default Login;
