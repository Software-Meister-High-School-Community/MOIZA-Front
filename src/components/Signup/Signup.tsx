import React from "react";
import * as S from "./Signup.style";
import { useLocation } from "react-router-dom";
import SignupForm from "./SignupForm";
import SignupProcedure from "./SignupProcedure";
import SignupTermsForm from "./SignupTermsForm";
import SignupIdPwForm from "./SignupIdPwForm";

const Signup: React.FC = () => {
  const { pathname } = useLocation();
  const location = pathname.slice(7);

  return (
    <S.SignupBox>
      <S.SignupTitle>회원가입</S.SignupTitle>
      <S.SignupMiddleWrap>
        <SignupProcedure />
        {location === "" && <SignupTermsForm />}
        {location === "/info" && <SignupForm />}
        {location === "/idpw" && <SignupIdPwForm />}
      </S.SignupMiddleWrap>
    </S.SignupBox>
  );
};

export default Signup;
