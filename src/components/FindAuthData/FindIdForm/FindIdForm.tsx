import { useState } from "react";
import { useNavigate } from "react-router";
import { IFindIdDataProps } from "../../../interface/FindAuthData/FindAuthData.type";
import { findIdDataNullCheck } from "../../../util/findAuthDataNullCheck";
import SubmitButton from "../../Common/Button/SubmitButton";
import { FindAuthDataSubmitButtonWrap } from "../FindAuthData.style";
import {
  FindIdFormCertificationButton,
  FindIdFormTextInput,
  FindIdFormBox,
  FindIdFormInputWrap,
  FindIdFormTextInputWrap,
  FindIdFormTitle,
  FindIdFormWrap,
} from "./FindIdForm.style";
import FindIdResult from "./FindIdResult";

const FindIdForm: React.FC = () => {
  const navigate = useNavigate();

  const [checkData, setCheckData] = useState<IFindIdDataProps>({
    name: "",
    birth: "",
    email: "",
    certificationNumber: "",
  });

  const [resultName, setResultName] = useState("");
  const [resultId, setResultId] = useState("");

  const [isFind, setIsFind] = useState(false);

  const [notSendCertificationNumber, setNotSendCertificationNumber] =
    useState(true);

  const onClickSendCertification = () => {
    setNotSendCertificationNumber(false);
  };

  const isNull = findIdDataNullCheck(checkData);

  const onClick = () => {
    setResultName("장정원");
    setResultId("jangjang");
    setIsFind(true);
  };

  const { name, birth, email, certificationNumber } = checkData;

  return (
    <>
      <FindIdFormBox isFind={isFind}>
        <FindIdFormWrap>
          {isFind ? (
            <FindIdResult name={resultName} resultId={resultId} />
          ) : (
            <>
              <FindIdFormTitle>이메일 인증</FindIdFormTitle>
              <FindIdFormInputWrap>
                <FindIdFormTextInputWrap>
                  <FindIdFormTextInput
                    placeholder="이름"
                    isWrite={checkData.name !== ""}
                    value={name}
                    name="name"
                    onChange={(e) =>
                      setCheckData((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                  />
                </FindIdFormTextInputWrap>
                <FindIdFormTextInputWrap>
                  <FindIdFormTextInput
                    isWrite={checkData.birth !== ""}
                    placeholder="생년월일 8자리 입력"
                    value={birth}
                    name="birth"
                    onChange={(e) =>
                      setCheckData((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                  />
                </FindIdFormTextInputWrap>
                <FindIdFormTextInputWrap>
                  <FindIdFormTextInput
                    isWrite={checkData.email !== ""}
                    placeholder="회원가입 시 입력한 이메일 주소"
                    value={email}
                    name="email"
                    onChange={(e) =>
                      setCheckData((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                  />
                  <FindIdFormCertificationButton
                    isWrite={checkData.email !== ""}
                    disabled={checkData.email === ""}
                    onClick={onClickSendCertification}
                  >
                    인증메일 보내기
                  </FindIdFormCertificationButton>
                </FindIdFormTextInputWrap>
                <FindIdFormTextInputWrap>
                  <FindIdFormTextInput
                    isWrite={checkData.certificationNumber !== ""}
                    placeholder="인증번호"
                    value={certificationNumber}
                    name="certificationNumber"
                    onChange={(e) =>
                      setCheckData((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                    disabled={notSendCertificationNumber}
                  />
                </FindIdFormTextInputWrap>
              </FindIdFormInputWrap>
            </>
          )}
        </FindIdFormWrap>
      </FindIdFormBox>
      <FindAuthDataSubmitButtonWrap>
        {isFind ? (
          <>
            <SubmitButton
              big
              text={"비밀번호 찾기"}
              yellow
              handleClick={() => navigate("/findauthdata/findpw")}
            />
            <SubmitButton
              big
              text={"로그인 하기"}
              blue
              handleClick={() => navigate("/login")}
            />
          </>
        ) : (
          <SubmitButton
            big
            text={"다음"}
            disable={isNull}
            blue
            handleClick={onClick}
          />
        )}
      </FindAuthDataSubmitButtonWrap>
    </>
  );
};

export default FindIdForm;
