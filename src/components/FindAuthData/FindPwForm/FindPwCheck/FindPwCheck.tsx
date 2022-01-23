import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { findPwData } from "../../../../store/FindAuthData/findCheckDataAtom";
import * as FIF from "../FindPwForm.style";

const FindPwCheck: React.FC = () => {
  const [checkData, setCheckData] = useRecoilState(findPwData);
  const { id } = checkData;
  const [notSendCertificationNumber, setNotSendCertificationNumber] =
    useState(true);

  const onClickSendCertification = () => {
    setNotSendCertificationNumber(false);
  };

  return (
    <>
      <FIF.FindPwFormTitle>아이디를 입력해주세요.</FIF.FindPwFormTitle>
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
      </FIF.FindPwFormInputWrap>
    </>
  );
};
export default FindPwCheck;
