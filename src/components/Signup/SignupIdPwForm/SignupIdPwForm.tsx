import React, { useMemo } from "react";
import * as SIPF from "./SignupIdPwForm.style";
import { SignupFooterWrap, SignupFormsWrap } from "../Signup.style";
import SubmitButton from "../../Common/Button/SubmitButton";
import { useRecoilValue } from "recoil";
import { SignupIdPwFormData } from "../../../store/Signup/registerInfoAtom";
import { signupIdPwFormDataNullCheck } from "../../../util/signupDataNullCheck";

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

  const authData = useRecoilValue(SignupIdPwFormData);

  const isNull = useMemo(
    () => signupIdPwFormDataNullCheck(authData),
    [authData]
  );

  return (
    <SignupFormsWrap>
      <SIPF.SignupIdPwFormBox>
        <SIPF.SignupIdPwTitle>아이디</SIPF.SignupIdPwTitle>
        <div style={{ display: "flex", marginBottom: 72 }}>
          <TextInput
            width="340"
            name="id"
            type="text"
            value={authData.id}
            setValue={handleIdPw}
          />
          <SIPF.SignupIdPwDoubleCheckButton
            enabled={authData.id !== ""}
            disabled={authData.id === ""}
          >
            아이디 중복확인
          </SIPF.SignupIdPwDoubleCheckButton>
        </div>
        <SIPF.SignupIdPwTitle>비밀번호</SIPF.SignupIdPwTitle>
        <TextInput
          width="340"
          type="password"
          name="pw"
          value={authData.pw}
          setValue={handleIdPw}
          isShow={isPwShow}
          onClick={setIsPwShow}
        />
        <SIPF.SignupIdPwGuideText style={{ marginBottom: 72 }}>
          8~16자 영문 대소문자, 숫자, 특수문자를 모두 조합하여 구성해주세요.
        </SIPF.SignupIdPwGuideText>
        <SIPF.SignupIdPwTitle>비밀번호 확인</SIPF.SignupIdPwTitle>
        <TextInput
          width="340"
          type="password"
          name="checkPw"
          value={authData.checkPw}
          setValue={handleIdPw}
          isShow={isCheckPwShow}
          onClick={setIsCheckPwShow}
        />
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
