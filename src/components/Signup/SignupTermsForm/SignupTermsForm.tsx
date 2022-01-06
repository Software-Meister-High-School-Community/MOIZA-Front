import React from "react";
import {
  SignupTermsFormBox,
  SignupTermsFormTextWrap,
  SignupTermsFormTitle,
} from "./SignupTermsForm.style";

const SignupTermsForm: React.FC = () => {
  return (
    <SignupTermsFormBox>
      <SignupTermsFormTitle>무슨 동의</SignupTermsFormTitle>
      <SignupTermsFormTextWrap></SignupTermsFormTextWrap>
    </SignupTermsFormBox>
  );
};

export default SignupTermsForm;
