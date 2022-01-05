import React, { useState } from "react";
import {
  LoginFormBox,
  LoginFormTextInput,
  LoginFormInputTitle,
  LoginFormInputWrap,
  LoginFormSaveInputWrap,
  LoginFormSaveCheckButton,
  LoginFormSaveCheckButtonRect,
  LoginFormTextInputWrap,
  LoginFormCategoryInputWrap,
  LoginFormCategoryInput,
  LoginFormCategoryInputLine,
} from "./LoginForm.style";

const LoginForm: React.FC = () => {
  const [isCheck, setIsCheck] = useState(false);

  return (
    <LoginFormBox>
      <LoginFormInputWrap>
        <LoginFormTextInputWrap>
          <LoginFormInputTitle>아이디</LoginFormInputTitle>
          <LoginFormTextInput placeholder="아이디" />
          <LoginFormInputTitle>비밀번호</LoginFormInputTitle>
          <LoginFormTextInput placeholder="비밀번호" />
        </LoginFormTextInputWrap>
        <LoginFormSaveInputWrap>
          <LoginFormSaveCheckButton
            checked={isCheck}
            onClick={() => setIsCheck((prev) => !prev)}
          >
            <LoginFormSaveCheckButtonRect />
          </LoginFormSaveCheckButton>
          로그인 저장
        </LoginFormSaveInputWrap>
        <LoginFormCategoryInputWrap>
          <LoginFormCategoryInput>회원가입</LoginFormCategoryInput>
          <LoginFormCategoryInputLine />
          <LoginFormCategoryInput>아이디 찾기</LoginFormCategoryInput>
          <LoginFormCategoryInputLine />
          <LoginFormCategoryInput>비밀번호 찾기</LoginFormCategoryInput>
        </LoginFormCategoryInputWrap>
      </LoginFormInputWrap>
    </LoginFormBox>
  );
};

export default LoginForm;
