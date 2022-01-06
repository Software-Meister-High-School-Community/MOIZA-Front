import React from "react";
import { SignupBox, SignupMiddleWrap, SignupTitle } from "./Signup.style";
import SignupForm from "./SignupForm";
import SignupProcedure from "./SignupProcedure";
import SignupTermsForm from "./SignupTermsForm";

const Signup: React.FC = () => {
  return (
    <SignupBox>
      <SignupTitle>회원가입</SignupTitle>
      <SignupMiddleWrap>
        <SignupProcedure />
        {/* <SignupTermsForm /> */}
        <SignupForm />
      </SignupMiddleWrap>
    </SignupBox>
  );
};

export default Signup;
