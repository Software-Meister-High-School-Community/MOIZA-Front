import { useNavigate } from "react-router";
import useFindId from "../../../hooks/findAuthData/findId/useFindId";
import { FindAuthDataSubmitButtonWrap } from "../FindAuthData.style";
import * as FIF from "./FindIdForm.style";
import FindIdResult from "./FindIdResult";
import FindIdCertification from "./FindIdCertification";
import SubmitButton from "../../Common/Button/SubmitButton";
import { Dispatch, SetStateAction } from "react";

interface IFindIdForm {
  setTab: Dispatch<SetStateAction<string>>;
}

const FindIdForm: React.FC<IFindIdForm> = ({ setTab }) => {
  const navigate = useNavigate();

  const {
    idPart,
    email,
    setEmail,
    goToCertification,
    certificationNumber,
    setCertificationNumber,
    goToResult,
    result,
  } = useFindId();

  return (
    <>
      <FIF.FindIdFormBox>
        <FIF.FindIdFormWrap>
          <>
            {idPart === "이메일 입력" && (
              <>
                <FIF.FindIdFormTitle>이메일 인증</FIF.FindIdFormTitle>
                <FIF.FindIdFormInputWrap>
                  <FIF.FindIdFormTextInputWrap>
                    <FIF.FindIdFormTextInput
                      isWrite={email !== ""}
                      placeholder="회원가입 시 입력한 이메일 주소"
                      value={email}
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FIF.FindIdFormTextInputWrap>
                </FIF.FindIdFormInputWrap>
              </>
            )}
          </>
          <>
            {idPart === "인증번호 입력" && (
              <FindIdCertification
                certificationNumber={certificationNumber}
                setCertificationNumber={setCertificationNumber}
              />
            )}
          </>
          <>
            {idPart === "아이디 찾기 결과" && result && (
              <FindIdResult name={result?.name} resultId={result?.resultId} />
            )}
          </>
        </FIF.FindIdFormWrap>
      </FIF.FindIdFormBox>
      <FindAuthDataSubmitButtonWrap>
        <>
          {idPart === "이메일 입력" && (
            <SubmitButton
              big
              text={"다음"}
              disable={email === ""}
              blue
              name={"인증번호 입력"} // 다음 파트
              handleClick={(e) => goToCertification(e)}
            />
          )}
        </>
        <>
          {idPart === "인증번호 입력" && (
            <SubmitButton
              big
              text={"다음"}
              disable={certificationNumber === ""}
              blue
              name={"아이디 찾기 결과"}
              handleClick={(e) => goToResult(e)}
            />
          )}
        </>
        <>
          {idPart === "아이디 찾기 결과" && (
            <>
              <SubmitButton
                big
                text={"비밀번호 찾기"}
                yellow
                handleClick={() => setTab("비밀번호 찾기")}
              />
              <SubmitButton
                big
                text={"로그인 하기"}
                blue
                handleClick={() => navigate("/login")}
              />
            </>
          )}
        </>
      </FindAuthDataSubmitButtonWrap>
    </>
  );
};

export default FindIdForm;
