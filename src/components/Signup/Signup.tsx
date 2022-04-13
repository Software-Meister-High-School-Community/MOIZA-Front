import React, { ReactElement } from "react";
import * as S from "./Signup.style";
import SignupForm from "./SignupForm";
import SignupProcedure from "./SignupProcedure";
import SignupTermsForm from "./SignupTermsForm";
import SignupIdPwForm from "./SignupIdPwForm";
import Procedure1 from "../../assets/img/signup/signupProcedure1.svg";
import Procedure2 from "../../assets/img/signup/signupProcedure2.svg";
import Procedure3 from "../../assets/img/signup/signupProcedure3.svg";

import StepProgressBar from "react-step-progress";
import * as CONST from "./Constant/index";
import useSignup from "../../hooks/signup/useSignup";
import { useRecoilValue } from "recoil";
import { signupPart } from "../../store/Signup/signupPartAtom";
import "react-step-progress/dist/index.css";

const Signup: React.FC = () => {
  const part = useRecoilValue(signupPart);

  const { goToInfo } = useSignup();

  const compList: ReactElement[] = [
    <SignupTermsForm goToInfo={goToInfo} />,
    <SignupForm />,
    <SignupIdPwForm />,
  ];

  const procedureImgs: string[] = [Procedure1, Procedure2, Procedure3];

  return (
    <S.SignupBox>
      <S.SignupTitle>회원가입</S.SignupTitle>
      <S.SignupMiddleWrap>
        {compList.map((comp, idx) => {
          return (
            <React.Fragment key={idx}>
              {part === CONST.SignupPartList[idx] && (
                <SignupProcedure img={procedureImgs[idx]} />
              )}
              {part === CONST.SignupPartList[idx] && comp}
            </React.Fragment>
          );
        })}
      </S.SignupMiddleWrap>
    </S.SignupBox>
  );
};

export default Signup;
