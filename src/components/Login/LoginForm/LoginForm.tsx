import React, { useState } from "react";
import * as LF from "./LoginForm.style";
import { Link } from "react-router-dom";
import TextInput from "../../Common/Input/TextInput";
import { ILoginProps } from "../../../interface/Login/Login.type";

type Props = {
  loginData: ILoginProps;
  handleLoginData: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const LoginForm: React.FC<Props> = ({ loginData, handleLoginData }) => {
  const [isCheck, setIsCheck] = useState<boolean>(false);
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <LF.LoginFormBox>
      <LF.LoginFormInputWrap>
        <LF.LoginFormTextInputWrap>
          <LF.LoginFormInputTitle>아이디</LF.LoginFormInputTitle>
          <TextInput
            type="text"
            value={loginData.account_id}
            name={"account_id"}
            setValue={handleLoginData}
            placeholder={"아이디"}
            margin={"13px 0 58px 0"}
          />
          <LF.LoginFormInputTitle>비밀번호</LF.LoginFormInputTitle>
          <TextInput
            type="password"
            value={loginData.password}
            name="password"
            setValue={handleLoginData}
            isShow={isShow}
            onClick={setIsShow}
            margin={"13px 0 0 0"}
            placeholder="비밀번호"
          />
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
