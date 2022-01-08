import React, { useState } from "react";
import {
  SignupIdPwDoubleCheckButton,
  SignupIdPwFormBox,
  SignupIdPwGuideText,
  SignupIdPwInput,
  SignupIdPwInputWrap,
  SignupIdPwPasswordInputEyeButton,
  SignupIdPwPasswordInputEyeImg,
  SignupIdPwTitle,
} from "./SignupIdPwForm.style";
import * as Imgs from "../../../assets/img";

const SignupIdPwForm: React.FC = () => {
  const [userData, setUserData] = useState<{
    id: string;
    pw: string;
    checkPw: string;
  }>({
    id: "",
    pw: "",
    checkPw: "",
  });

  const [isPwShow, setIsPwShow] = useState(false);
  const [isCheckPwShow, setIsCheckPwShow] = useState(false);

  return (
    <SignupIdPwFormBox>
      <SignupIdPwInputWrap>
        <SignupIdPwTitle>아이디</SignupIdPwTitle>
        <div>
          <SignupIdPwInput
            type="text"
            value={userData.id}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, id: e.target.value }))
            }
          />
          <SignupIdPwDoubleCheckButton
            enabled={userData.id !== ""}
            disabled={userData.id === ""}
          >
            아이디 중복확인
          </SignupIdPwDoubleCheckButton>
        </div>
      </SignupIdPwInputWrap>
      <SignupIdPwInputWrap>
        <SignupIdPwTitle>비밀번호</SignupIdPwTitle>
        <div>
          <SignupIdPwInput
            type={isPwShow ? "text" : "password"}
            value={userData.pw}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, pw: e.target.value }))
            }
          />
          <SignupIdPwPasswordInputEyeButton
            onClick={() => setIsPwShow((prev) => !prev)}
          >
            <SignupIdPwPasswordInputEyeImg
              src={
                isPwShow
                  ? Imgs.LoginPasswordNoShowImg
                  : Imgs.LoginPasswordShowImg
              }
            />
          </SignupIdPwPasswordInputEyeButton>
        </div>
        <SignupIdPwGuideText>
          8~16자 영문 대소문자, 숫자, 특수문자를 모두 조합하여 구성해주세요.
        </SignupIdPwGuideText>
      </SignupIdPwInputWrap>
      <SignupIdPwInputWrap>
        <SignupIdPwTitle>비밀번호 확인</SignupIdPwTitle>
        <div>
          <SignupIdPwInput
            value={userData.checkPw}
            type={isCheckPwShow ? "text" : "password"}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, checkPw: e.target.value }))
            }
          />
          {userData.checkPw !== "" && (
            <SignupIdPwPasswordInputEyeButton
              onClick={() => setIsCheckPwShow((prev) => !prev)}
            >
              <SignupIdPwPasswordInputEyeImg
                src={
                  isCheckPwShow
                    ? Imgs.LoginPasswordNoShowImg
                    : Imgs.LoginPasswordShowImg
                }
              />
            </SignupIdPwPasswordInputEyeButton>
          )}
        </div>
      </SignupIdPwInputWrap>
    </SignupIdPwFormBox>
  );
};
export default SignupIdPwForm;
