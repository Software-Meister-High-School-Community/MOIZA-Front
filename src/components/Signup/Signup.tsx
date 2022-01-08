import React from "react";
import {
  SignupBox,
  SignupMiddleWrap,
  SignupNextButton,
  SignupTitle,
} from "./Signup.style";
import { Link, useLocation } from "react-router-dom";
import SignupForm from "./SignupForm";
import SignupProcedure from "./SignupProcedure";
import SignupTermsForm from "./SignupTermsForm";
import SubmitButton from "../Common/Button/SubmitButton";
import SignupIdPwForm from "./SignupIdPwForm";

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
        {location === "/idpw" && <SignupIdPwForm />}
      </SignupMiddleWrap>
      {location === "" && (
        <Link to="info">
          <SubmitButton text={"다음 단계"} blue big />
        </Link>
      )}
      {location === "/info" && (
        <Link to="idpw">
          <SubmitButton text={"다음 단계"} blue big />
        </Link>
      )}
      {location === "/idpw" && (
        <Link to="idpw">
          <SubmitButton text={"다음 단계"} blue big />
        </Link>
      )}
    </SignupBox>
  );
};

export default Signup;
