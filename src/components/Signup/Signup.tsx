import React, { ReactElement, useState } from "react";
import * as S from "./Signup.style";
import { useLocation } from "react-router-dom";
import SignupForm from "./SignupForm";
import SignupProcedure from "./SignupProcedure";
import SignupTermsForm from "./SignupTermsForm";
import SignupIdPwForm from "./SignupIdPwForm";
import * as Imgs from "../../assets/img";
import StepProgressBar from "react-step-progress";
import * as CONST from "./Constant/index";
import useSignup from "../../hooks/signup/useSignup";
import { useRecoilState } from "recoil";
import { signupPart } from "../../store/Signup/signupPartAtom";

const Signup: React.FC = () => {
  const [part, setPart] = useRecoilState(signupPart);
  const { goToInfo } = useSignup();

  const step1Content = <h1>약관동의</h1>;
  const step2Content = <h1>정보입력</h1>;
  const step3Content = <h1>아이디 / 비밀번호</h1>;

  const onSignup = () => {
    console.log("회원가입");
  };

  const step2Validator = () => {
    return true;
  };
  const step3Validator = () => {
    return true;
  };

  const compList: ReactElement[] = [
    <SignupTermsForm goToInfo={goToInfo} />,
    <SignupForm />,
    <SignupIdPwForm />,
  ];

  return (
    <S.SignupBox>
      <S.SignupTitle>회원가입</S.SignupTitle>
      <S.SignupMiddleWrap>
        <S.SignupProcedureBox>
          <StepProgressBar
            startingStep={0}
            onSubmit={onSignup}
            steps={[
              {
                label: "",
                subtitle: "약관동의",
                name: "약관동의",
                content: step1Content,
              },
              {
                label: "",
                subtitle: "정보 입력",
                name: "정보 입력",
                content: step2Content,
                validator: step2Validator,
              },
              {
                label: "",
                subtitle: "아이디 / 비밀번호",
                name: "아이디 / 비밀번호",
                content: step3Content,
                validator: step3Validator,
              },
            ]}
            labelClass="primary"
            contentClass="content"
            subtitleClass="subTitle"
            buttonWrapperClass="wrapper"
            stepClass="steps"
            progressClass="progress"
            previousBtnName="prev"
          />
        </S.SignupProcedureBox>
        {compList.map((comp, idx) => {
          return (
            <React.Fragment key={idx}>
              {part === CONST.SignupPartList[idx] && comp}
            </React.Fragment>
          );
        })}
      </S.SignupMiddleWrap>
    </S.SignupBox>
  );
};

export default Signup;
