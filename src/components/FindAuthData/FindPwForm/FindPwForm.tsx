import React, { ReactElement } from "react";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import useFindPw from "../../../hooks/findAuthData/findPw/useFindPw";
import { sendCertificationNumberStatus } from "../../../store/FindAuthData/certificationStatus";
import SubmitButton from "../../Common/Button/SubmitButton";
import { FindAuthDataSubmitButtonWrap } from "../FindAuthData.style";
import FindPwCertification from "./FindPwCertification";
import FindPwCheck from "./FindPwCheck";
import { FindPwFormBox, FindPwFormWrap } from "./FindPwForm.style";
import FindPwReset from "./FindPwReset";
import FindPwResult from "./FindPwResult";
import * as CONST from "../constant/index";

const FindPwForm: React.FC = () => {
  const navigate = useNavigate();

  const {
    pwPart,
    id,
    setId,
    goToCertification,
    certificationNumber,
    setCertificationNumber,
    goToResetPw,
    resetPw,
    setResetPw,
    resetPartIsNull,
    goToResult,
  } = useFindPw();

  const [isSendNumber, setIsSendNumber] = useRecoilState(
    sendCertificationNumberStatus
  );

  const compList: ReactElement[] = [
    <FindPwCheck id={id} setId={setId} />,
    <FindPwCertification
      certificationNumber={certificationNumber}
      setCertificationNumber={setCertificationNumber}
    />,
    <FindPwReset resetPw={resetPw} setResetPw={setResetPw} />,
    <FindPwResult />,
  ];

  return (
    <>
      <FindPwFormBox isCertification={isSendNumber.findPwSendNumber}>
        <FindPwFormWrap>
          {compList.map((comp, index) => {
            return (
              <React.Fragment key={index}>
                {pwPart === CONST.IFindPwKind[index].title && comp}
              </React.Fragment>
            );
          })}
        </FindPwFormWrap>
      </FindPwFormBox>
      <FindAuthDataSubmitButtonWrap>
        <>
          {pwPart === "아이디 입력" && (
            <SubmitButton
              big
              text={"다음"}
              blue
              disable={id === ""}
              name="인증번호 입력" //다음 파트
              handleClick={(e) => goToCertification(e)}
            />
          )}
        </>
        <>
          {pwPart === "인증번호 입력" && (
            <SubmitButton
              big
              text={"다음"}
              blue
              disable={certificationNumber === ""}
              name="비밀번호 재등록"
              handleClick={(e) => goToResetPw(e)}
            />
          )}
        </>
        <>
          {pwPart === "비밀번호 재등록" && (
            <SubmitButton
              big
              text={"다음"}
              blue
              name="비밀번호 결과"
              handleClick={(e) => goToResult(e)}
              disable={resetPartIsNull}
            />
          )}
        </>
        <>
          {pwPart === "비밀번호 결과" && (
            <SubmitButton
              big
              text={"로그인 하기"}
              blue
              handleClick={() => navigate("/login")}
            />
          )}
        </>
      </FindAuthDataSubmitButtonWrap>
    </>
  );
};

export default FindPwForm;
