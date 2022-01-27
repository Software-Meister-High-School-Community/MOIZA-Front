import React, { useState } from "react";
import * as LF from "./LoginForm.style";
import { Link } from "react-router-dom";
import EyeButton from "../../Common/Button/EyeButton";

const LoginForm: React.FC = () => {
  const [isCheck, setIsCheck] = useState<boolean>(false);
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <LF.LoginFormBox>
      <LF.LoginFormInputWrap>
        <LF.LoginFormTextInputWrap>
          <LF.LoginFormInputTitle>아이디</LF.LoginFormInputTitle>
          <LF.LoginFormTextInput placeholder="아이디" type="text" />
          <LF.LoginFormInputTitle>비밀번호</LF.LoginFormInputTitle>
          <LF.LoginFormPasswordInputWrap>
            <LF.LoginFormPasswordInput
              placeholder="비밀번호"
              type={isShow ? "text" : "password"}
            />

            <EyeButton isShow={isShow} onClick={setIsShow} />
          </LF.LoginFormPasswordInputWrap>
        </LF.LoginFormTextInputWrap>
        <LF.LoginFormSaveInputWrap>
          <LF.LoginFormSaveCheckButton
            checked={isCheck}
            onClick={() => setIsCheck((prev) => !prev)}
          >
            <LF.LoginFormSaveCheckButtonRect />
          </LF.LoginFormSaveCheckButton>
          로그인 저장
        </LF.LoginFormSaveInputWrap>
        <LF.LoginFormCategoryInputWrap>
          <LF.LoginFormCategoryInput>
            <Link to="/signup">회원가입</Link>
          </LF.LoginFormCategoryInput>
          <LF.LoginFormCategoryInputLine />
          <LF.LoginFormCategoryInput>
            <Link to="/findauthdata">아이디 찾기</Link>
          </LF.LoginFormCategoryInput>
          <LF.LoginFormCategoryInputLine />
          <LF.LoginFormCategoryInput>
            <Link to="/findauthdata">비밀번호 찾기</Link>
          </LF.LoginFormCategoryInput>
        </LF.LoginFormCategoryInputWrap>
      </LF.LoginFormInputWrap>
    </LF.LoginFormBox>
  );
};

export default LoginForm;
