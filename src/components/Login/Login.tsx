import React from "react";
import { LoginBox, LoginTitle } from "./Login.style";
import LoginForm from "./LoginForm";

const Login: React.FC = () => {
  return (
    <LoginBox>
      <LoginTitle>로그인</LoginTitle>
      <LoginForm />
    </LoginBox>
  );
};

export default Login;
