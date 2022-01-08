import React from "react";
import * as SP from "./SignupProcedure.style";

const SignupProcedure: React.FC = () => {
  //임의 절차 상태
  const first = false;
  const second = true;
  const third = false;

  return (
    <SP.SignupProcedureBox>
      <SP.SignupProcedureLineWrap>
        <SP.SignupProcedureWrap>
          <SP.SignupProcedurePoint isArrival={first}>
            <SP.SignupProcedurePointOutside isArrival={first} />
          </SP.SignupProcedurePoint>

          <SP.SignupProcedureText isArrival={first}>
            약관 동의
          </SP.SignupProcedureText>
        </SP.SignupProcedureWrap>
        <SP.SignupProcedureWrap>
          <SP.SignupProcedurePoint isArrival={second}>
            <SP.SignupProcedurePointOutside isArrival={second} />
          </SP.SignupProcedurePoint>
          <SP.SignupProcedureText isArrival={second}>
            정보 입력
          </SP.SignupProcedureText>
        </SP.SignupProcedureWrap>
        <SP.SignupProcedureLine isArrival={second} />
        <SP.SignupProcedureLine isArrival={third} />
        <SP.SignupProcedureWrap>
          <SP.SignupProcedurePoint isArrival={third}>
            <SP.SignupProcedurePointOutside isArrival={third} />
          </SP.SignupProcedurePoint>
          <SP.SignupProcedureText isArrival={third}>
            아이디 / 비밀번호
          </SP.SignupProcedureText>
        </SP.SignupProcedureWrap>
      </SP.SignupProcedureLineWrap>
    </SP.SignupProcedureBox>
  );
};

export default SignupProcedure;
