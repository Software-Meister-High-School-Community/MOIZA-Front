import { useState } from "react";
import { IFindIdDataProps } from "../../../interface/FindAuthData/FindAuthData.type";
import { findIdDataNullCheck } from "../../../util/findAuthDataNullCheck";
import SubmitButton from "../../Common/Button/SubmitButton";
import { FindAuthDataSubmitButtonWrap } from "../FindAuthData.style";
import {
  FindFormCertificationButton,
  FindFormTextInput,
  FindIdFormBox,
  FindIdFormInputWrap,
  FindIdFormTextInputWrap,
  FindIdFormTitle,
  FindIdFormWrap,
} from "./FindIdForm.style";

const FindIdForm: React.FC = () => {
  const [checkData, setCheckData] = useState<IFindIdDataProps>({
    name: "",
    birth: "",
    email: "",
    certificationNumber: "",
  });

  const [notSendCertificationNumber, setNotSendCertificationNumber] =
    useState(true);

  const { name, birth, email, certificationNumber } = checkData;

  const onClickSendCertification = () => {
    setNotSendCertificationNumber(false);
  };

  const isNull = findIdDataNullCheck(checkData);

  return (
    <>
      <FindIdFormBox>
        <FindIdFormWrap>
          <FindIdFormTitle>이메일 인증</FindIdFormTitle>
          <FindIdFormInputWrap>
            <FindIdFormTextInputWrap>
              <FindFormTextInput
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
              <FindFormTextInput
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
              <FindFormTextInput
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
              <FindFormCertificationButton
                isWrite={checkData.email !== ""}
                disabled={checkData.email === ""}
                onClick={onClickSendCertification}
              >
                인증메일 보내기
              </FindFormCertificationButton>
            </FindIdFormTextInputWrap>
            <FindIdFormTextInputWrap>
              <FindFormTextInput
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
        </FindIdFormWrap>
      </FindIdFormBox>
      <FindAuthDataSubmitButtonWrap>
        <SubmitButton big text={"다음"} disable={isNull} blue />
      </FindAuthDataSubmitButtonWrap>
    </>
  );
};

export default FindIdForm;
