import React, { useState } from "react";
import {
  LoginFormBox,
  LoginFormInput,
  LoginFormInputTitle,
  LoginFormInputWrap,
  LoginFormSaveInputWrap,
  LoginFormSaveCheckButtonWrap,
  LoginFormSaveCheckButton,
  LoginFormSaveCheckButtonRect,
} from "./LoginForm.style";

const LoginForm: React.FC = () => {
  const [isCheck, setIsCheck] = useState(false);

  return (
    <LoginFormBox>
      <LoginFormInputWrap>
        <LoginFormInputTitle>아이디</LoginFormInputTitle>
        <LoginFormInput placeholder="아이디" />
        <LoginFormInputTitle>비밀번호</LoginFormInputTitle>
        <LoginFormInput placeholder="비밀번호" />
        <LoginFormSaveInputWrap>
          <LoginFormSaveCheckButton
            checked={isCheck}
            onClick={() => setIsCheck((prev) => !prev)}
          >
            <LoginFormSaveCheckButtonRect />
          </LoginFormSaveCheckButton>
        </LoginFormSaveInputWrap>
      </LoginFormInputWrap>
    </LoginFormBox>
  );
};

export default LoginForm;
