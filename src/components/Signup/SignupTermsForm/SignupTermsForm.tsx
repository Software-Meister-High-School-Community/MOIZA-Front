import React from "react";
import { Link } from "react-router-dom";
import SubmitButton from "../../Common/Button/SubmitButton";
import { SignupFormsWrap } from "../Signup.style";
import * as STF from "./SignupTermsForm.style";

const SignupTermsForm: React.FC = () => {
  return (
    <SignupFormsWrap>
      <STF.SignupTermsFormBox>
        <STF.SignupTermsFormTitle>무슨 동의</STF.SignupTermsFormTitle>
        <STF.SignupTermsFormTextWrap></STF.SignupTermsFormTextWrap>
      </STF.SignupTermsFormBox>
      <Link to="info">
        <SubmitButton text={"다음 단계"} blue big />
      </Link>
    </SignupFormsWrap>
  );
};

export default SignupTermsForm;
