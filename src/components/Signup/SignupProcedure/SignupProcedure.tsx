import React from "react";
import {
  SignupProcedureBox,
  SignupProcedureLine,
  SignupProcedureLineWrap,
  SignupProcedurePoint,
  SignupProcedurePointOutside,
  SignupProcedureText,
  SignupProcedureWrap,
} from "./SignupProcedure.style";

const SignupProcedure: React.FC = () => {
  //임의 절차 상태
  const first = false;
  const second = true;
  const third = false;

  return (
    <SignupProcedureBox>
      <SignupProcedureLineWrap>
        <SignupProcedureWrap>
          <SignupProcedurePoint isArrival={first}>
            <SignupProcedurePointOutside isArrival={first} />
          </SignupProcedurePoint>

          <SignupProcedureText isArrival={first}>약관 동의</SignupProcedureText>
        </SignupProcedureWrap>
        <SignupProcedureWrap>
          <SignupProcedurePoint isArrival={second}>
            <SignupProcedurePointOutside isArrival={second} />
          </SignupProcedurePoint>
          <SignupProcedureText isArrival={second}>
            정보 입력
          </SignupProcedureText>
        </SignupProcedureWrap>
        <SignupProcedureLine isArrival={second} />
        <SignupProcedureLine isArrival={third} />
        <SignupProcedureWrap>
          <SignupProcedurePoint isArrival={third}>
            <SignupProcedurePointOutside isArrival={third} />
          </SignupProcedurePoint>
          <SignupProcedureText isArrival={third}>
            아이디 / 비밀번호
          </SignupProcedureText>
        </SignupProcedureWrap>
      </SignupProcedureLineWrap>
    </SignupProcedureBox>
  );
};

export default SignupProcedure;
