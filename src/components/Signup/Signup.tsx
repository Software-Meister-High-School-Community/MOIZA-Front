import React from "react";
import { SignupBox, SignupMiddleWrap, SignupTitle } from "./Signup.style";
import { useLocation } from "react-router-dom";
import SignupForm from "./SignupForm";
import SignupProcedure from "./SignupProcedure";
import SignupTermsForm from "./SignupTermsForm";

const Signup: React.FC = () => {
  const { pathname } = useLocation();
  const location = pathname.slice(7);

  return (
    <SignupBox>
      <SignupTitle>회원가입</SignupTitle>
      <SignupMiddleWrap>
        <SignupProcedure />
        {location === "" && <SignupTermsForm />}
        {location === "/info" && <SignupForm />}
      </SignupMiddleWrap>
    </SignupBox>
  );
};

export default Signup;
