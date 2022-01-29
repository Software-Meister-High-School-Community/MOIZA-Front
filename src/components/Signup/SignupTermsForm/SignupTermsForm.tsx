import React from "react";
import SubmitButton from "../../Common/Button/SubmitButton";
import { SignupFooterWrap, SignupFormsWrap } from "../Signup.style";
import * as STF from "./SignupTermsForm.style";

interface ISignupTermsFormProps {
  goToInfo: () => void;
}

const SignupTermsForm: React.FC<ISignupTermsFormProps> = ({ goToInfo }) => {
  return (
    <SignupFormsWrap>
      <STF.SignupTermsFormBox>
        <STF.SignupTermsFormTitle>무슨 동의</STF.SignupTermsFormTitle>
        <STF.SignupTermsFormTextWrap></STF.SignupTermsFormTextWrap>
      </STF.SignupTermsFormBox>
      <SignupFooterWrap>
        <SubmitButton
          text={"다음 단계"}
          blue
          big
          name="정보입력"
          handleClick={goToInfo}
        />
      </SignupFooterWrap>
    </SignupFormsWrap>
  );
};

export default SignupTermsForm;
