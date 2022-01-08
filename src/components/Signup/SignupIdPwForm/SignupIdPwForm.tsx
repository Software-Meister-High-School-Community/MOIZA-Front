import React, { useState } from "react";
import * as SIPF from "./SignupIdPwForm.style";
import * as Imgs from "../../../assets/img";
import { SignupFormsWrap } from "../Signup.style";
import { Link } from "react-router-dom";
import SubmitButton from "../../Common/Button/SubmitButton";
import { useRecoilState } from "recoil";
import {
  SignupFormData,
  SignupIdPwFormData,
} from "../../../store/Signup/registerInfoAtom";
import { signupIdPwFormDataNullCheck } from "../../../util/signupDataNullCheck";

const SignupIdPwForm: React.FC = () => {
  const [authData, setAuthData] = useRecoilState(SignupIdPwFormData);
  const [userInfo, setUserInfo] = useRecoilState(SignupFormData);

  const [isPwShow, setIsPwShow] = useState(false);
  const [isCheckPwShow, setIsCheckPwShow] = useState(false);

  const isNull = signupIdPwFormDataNullCheck(authData);

  const onClick = () => {
    console.log(userInfo);
    console.log(authData);
  };

  return (
    <SignupFormsWrap>
      <SIPF.SignupIdPwFormBox>
        <SIPF.SignupIdPwInputWrap>
          <SIPF.SignupIdPwTitle>아이디</SIPF.SignupIdPwTitle>
          <div>
            <SIPF.SignupIdPwInput
              type="text"
              name="id"
              value={authData.id}
              onChange={(e) =>
                setAuthData((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
            <SIPF.SignupIdPwDoubleCheckButton
              enabled={authData.id !== ""}
              disabled={authData.id === ""}
            >
              아이디 중복확인
            </SIPF.SignupIdPwDoubleCheckButton>
          </div>
        </SIPF.SignupIdPwInputWrap>
        <SIPF.SignupIdPwInputWrap>
          <SIPF.SignupIdPwTitle>비밀번호</SIPF.SignupIdPwTitle>
          <div>
            <SIPF.SignupIdPwInput
              type={isPwShow ? "text" : "password"}
              name="pw"
              value={authData.pw}
              onChange={(e) =>
                setAuthData((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
            <SIPF.SignupIdPwPasswordInputEyeButton
              onClick={() => setIsPwShow((prev) => !prev)}
            >
              <SIPF.SignupIdPwPasswordInputEyeImg
                src={
                  isPwShow
                    ? Imgs.LoginPasswordNoShowImg
                    : Imgs.LoginPasswordShowImg
                }
              />
            </SIPF.SignupIdPwPasswordInputEyeButton>
          </div>
          <SIPF.SignupIdPwGuideText>
            8~16자 영문 대소문자, 숫자, 특수문자를 모두 조합하여 구성해주세요.
          </SIPF.SignupIdPwGuideText>
        </SIPF.SignupIdPwInputWrap>
        <SIPF.SignupIdPwInputWrap>
          <SIPF.SignupIdPwTitle>비밀번호 확인</SIPF.SignupIdPwTitle>
          <div>
            <SIPF.SignupIdPwInput
              value={authData.checkPw}
              name="checkPw"
              type={isCheckPwShow ? "text" : "password"}
              onChange={(e) =>
                setAuthData((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
            {authData.checkPw !== "" && (
              <SIPF.SignupIdPwPasswordInputEyeButton
                onClick={() => setIsCheckPwShow((prev) => !prev)}
              >
                <SIPF.SignupIdPwPasswordInputEyeImg
                  src={
                    isCheckPwShow
                      ? Imgs.LoginPasswordNoShowImg
                      : Imgs.LoginPasswordShowImg
                  }
                />
              </SIPF.SignupIdPwPasswordInputEyeButton>
            )}
          </div>
        </SIPF.SignupIdPwInputWrap>
      </SIPF.SignupIdPwFormBox>
      <Link to="idpw">
        <SubmitButton
          text={"다음 단계"}
          blue
          big
          disable={isNull}
          handleClick={onClick}
        />
      </Link>
    </SignupFormsWrap>
  );
};
export default SignupIdPwForm;
