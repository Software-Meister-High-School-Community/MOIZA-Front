import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import { findPwData } from "../../../../store/FindAuthData/findCheckDataAtom";
import {
  FindPwFormCertificationButton,
  FindPwFormInputWrap,
  FindPwFormTextInput,
  FindPwFormTextInputWrap,
  FindPwFormTitle,
} from "../FindPwForm.style";

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
      <FindPwFormTitle>이메일 인증</FindPwFormTitle>
      <FindPwFormInputWrap>
        <FindPwFormTextInputWrap>
          <FindPwFormTextInput
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
        </FindPwFormTextInputWrap>
        <FindPwFormTextInputWrap>
          <FindPwFormTextInput
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
        </FindPwFormTextInputWrap>
        <FindPwFormTextInputWrap>
          <FindPwFormTextInput
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
        </FindPwFormTextInputWrap>
        <FindPwFormTextInputWrap>
          <FindPwFormTextInput
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
          <FindPwFormCertificationButton
            isWrite={email !== ""}
            disabled={email === ""}
            onClick={onClickSendCertification}
          >
            인증메일 보내기
          </FindPwFormCertificationButton>
        </FindPwFormTextInputWrap>
        <FindPwFormTextInputWrap>
          <FindPwFormTextInput
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
        </FindPwFormTextInputWrap>
      </FindPwFormInputWrap>
    </>
  );
};
export default FindPwCheck;
