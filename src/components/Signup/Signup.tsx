import React from "react";
import { SignupBox, SignupMiddleWrap, SignupTitle } from "./Signup.style";
import SignupProcedure from "./SignupProcedure";

const Signup: React.FC = () => {
  return (
    <SignupBox>
      <SignupTitle>회원가입</SignupTitle>
      <SignupMiddleWrap>
        <SignupProcedure />
      </SignupMiddleWrap>
    </SignupBox>
  );
};

export default Signup;
