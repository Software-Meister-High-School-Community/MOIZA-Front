import React, { useMemo } from "react";
import * as SIPF from "./SignupIdPwForm.style";
import { SignupFooterWrap, SignupFormsWrap } from "../Signup.style";
import SubmitButton from "../../Common/Button/SubmitButton";
import { useRecoilState } from "recoil";
import { SignupIdPwFormData } from "../../../store/Signup/registerInfoAtom";
import { signupIdPwFormDataNullCheck } from "../../../util/signupDataNullCheck";
import EyeButton from "../../Common/Button/EyeButton";
import useSignupIdPw from "../../../hooks/signup/useSignupIdPw";
import TextInput from "../../Common/Input/TextInput";

const SignupIdPwForm: React.FC = () => {
  const {
    isPwShow,
    setIsPwShow,
    isCheckPwShow,
    setIsCheckPwShow,
    handleIdPw,
    goToLogin,
  } = useSignupIdPw();

  const [authData, setAuthData] = useRecoilState(SignupIdPwFormData);

  const isNull = useMemo(
    () => signupIdPwFormDataNullCheck(authData),
    [authData]
  );

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
              onChange={(e) => handleIdPw(e)}
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
          {/* <div>
            <SIPF.SignupIdPwInput
              type={isPwShow ? "text" : "password"}
              name="pw"
              value={authData.pw}
              onChange={(e) => handleIdPw(e)}
            />
            <EyeButton isShow={isPwShow} onClick={setIsPwShow} left={310} />
          </div> */}
          <TextInput
            width="340"
            type="password"
            name="pw"
            value={authData.pw}
            setValue={(e) => handleIdPw(e)}
            isShow={isPwShow}
            onClick={setIsPwShow}
          />
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
              onChange={(e) => handleIdPw(e)}
            />
            {authData.checkPw !== "" && (
              <EyeButton
                isShow={isCheckPwShow}
                onClick={setIsCheckPwShow}
                left={310}
              />
            )}
          </div>
        </SIPF.SignupIdPwInputWrap>
      </SIPF.SignupIdPwFormBox>
      <SignupFooterWrap>
        <SubmitButton
          text={"다음 단계"}
          blue
          big
          disable={isNull}
          handleClick={goToLogin}
        />
      </SignupFooterWrap>
    </SignupFormsWrap>
  );
};
export default React.memo(SignupIdPwForm);
