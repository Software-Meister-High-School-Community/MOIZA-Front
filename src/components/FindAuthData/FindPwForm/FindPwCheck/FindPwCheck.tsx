import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { findPwData } from "../../../../store/FindAuthData/findCheckDataAtom";
import * as FIF from "../FindPwForm.style";

const FindPwCheck: React.FC = () => {
  const [checkData, setCheckData] = useRecoilState(findPwData);
  const { id, name, birth, email, certificationNumber } = checkData;
  const [notSendCertificationNumber, setNotSendCertificationNumber] =
    useState(true);

  const onClickSendCertification = () => {
    setNotSendCertificationNumber(false);
  };

  return (
    <>
      <FIF.FindPwFormTitle>이메일 인증</FIF.FindPwFormTitle>
      <FIF.FindPwFormInputWrap>
        <FIF.FindPwFormTextInputWrap>
          <FIF.FindPwFormTextInput
            isWrite={id !== ""}
            value={id}
            placeholder="아이디"
            name="id"
            onChange={(e) =>
              setCheckData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </FIF.FindPwFormTextInputWrap>
        <FIF.FindPwFormTextInputWrap>
          <FIF.FindPwFormTextInput
            isWrite={name !== ""}
            value={name}
            placeholder="이름"
            name="name"
            onChange={(e) =>
              setCheckData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </FIF.FindPwFormTextInputWrap>
        <FIF.FindPwFormTextInputWrap>
          <FIF.FindPwFormTextInput
            isWrite={birth !== ""}
            value={birth}
            placeholder="생년월일 8자리 입력"
            name="birth"
            onChange={(e) =>
              setCheckData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </FIF.FindPwFormTextInputWrap>
        <FIF.FindPwFormTextInputWrap>
          <FIF.FindPwFormTextInput
            isWrite={email !== ""}
            value={email}
            placeholder="회원가입 시 입력한 이메일 주소"
            name="email"
            onChange={(e) =>
              setCheckData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <FIF.FindPwFormCertificationButton
            isWrite={email !== ""}
            disabled={email === ""}
            onClick={onClickSendCertification}
          >
            인증메일 보내기
          </FIF.FindPwFormCertificationButton>
        </FIF.FindPwFormTextInputWrap>
        <FIF.FindPwFormTextInputWrap>
          <FIF.FindPwFormTextInput
            isWrite={certificationNumber !== ""}
            value={certificationNumber}
            placeholder="인증번호"
            name="certificationNumber"
            onChange={(e) =>
              setCheckData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            disabled={notSendCertificationNumber}
          />
        </FIF.FindPwFormTextInputWrap>
      </FIF.FindPwFormInputWrap>
    </>
  );
};
export default FindPwCheck;
