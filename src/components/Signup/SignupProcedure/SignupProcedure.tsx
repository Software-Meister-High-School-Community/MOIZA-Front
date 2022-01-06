import React from "react";
import {
  SignupProcedureBox,
  SignupProcedureLine,
  SignupProcedurePoint,
  SignupProcedurePointOutside,
  SignupProcedureText,
  SignupProcedureWrap,
} from "./SignupProcedure.style";

const SignupProcedure: React.FC = () => {
  const first = true;
  const second = false;
  const third = false;

  return (
    <SignupProcedureBox>
      <SignupProcedureLine>
        <SignupProcedureWrap>
          <SignupProcedurePointOutside isArrival={first}>
            <SignupProcedurePoint isArrival={first} />
          </SignupProcedurePointOutside>
          <SignupProcedureText isArrival={first}>약관 동의</SignupProcedureText>
        </SignupProcedureWrap>
        <SignupProcedureWrap>
          <SignupProcedurePointOutside isArrival={second}>
            <SignupProcedurePoint isArrival={second} />
          </SignupProcedurePointOutside>
          <SignupProcedureText isArrival={second}>
            정보 입력
          </SignupProcedureText>
        </SignupProcedureWrap>
        <SignupProcedureWrap>
          <SignupProcedurePointOutside isArrival={third}>
            <SignupProcedurePoint isArrival={third} />
          </SignupProcedurePointOutside>
          <SignupProcedureText isArrival={third}>
            아이디 / 비밀번호
          </SignupProcedureText>
        </SignupProcedureWrap>
      </SignupProcedureLine>
    </SignupProcedureBox>
  );
};

export default SignupProcedure;
