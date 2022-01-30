import React, { useCallback, useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import { IFindPwResetDataProps } from "../../../interface/FindAuthData/FindAuthData.type";
import { sendCertificationNumberStatus } from "../../../store/FindAuthData/certificationStatus";
import { findPwResetDataNullCheck } from "../../../util/findAuthDataNullCheck";

const useFindPw = () => {
  const [pwPart, setPwPart] = useState<string>("아이디 입력");
  const [id, setId] = useState<string>("");
  const [certificationNumber, setCertificationNumber] = useState<string>("");
  const [isSendNumber, setIsSendNumber] = useRecoilState(
    sendCertificationNumberStatus
  );
  const [resetPw, setResetPw] = useState<IFindPwResetDataProps>({
    pw: "",
    checkPw: "",
  });

  const resetPartIsNull = useMemo(
    () => findPwResetDataNullCheck(resetPw),
    [resetPw]
  );

  const goToCertification = useCallback(
    (e: React.ChangeEvent<HTMLButtonElement>) => {
      //인증번호 api 통신
      setId("");
      setPwPart(e.target.name);
      setIsSendNumber((prev) => ({ ...prev, findPwSendNumber: true }));
    },
    [setIsSendNumber]
  );

  const goToResetPw = useCallback(
    (e: React.ChangeEvent<HTMLButtonElement>) => {
      //인증번호 확인 api 통신
      setIsSendNumber((prev) => ({ ...prev, findPwSendNumber: false }));
      setPwPart(e.target.name);
      setCertificationNumber("");
    },
    [setIsSendNumber]
  );

  const goToResult = (e: React.ChangeEvent<HTMLButtonElement>) => {
    //비밀번호 재설정 api 통신
    setResetPw({ pw: "", checkPw: "" });
    setPwPart(e.target.name);
  };

  return {
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
  };
};

export default useFindPw;
