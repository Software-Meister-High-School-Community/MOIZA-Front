import React, { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { IFindIdResultProps } from "../../../interface/FindAuthData/FindAuthData.type";
import { sendCertificationNumberStatus } from "../../../store/FindAuthData/certificationStatus";

const useFindId = () => {
  const [idPart, setIdPart] = useState<string>("이메일 입력");
  const [email, setEmail] = useState<string>("");
  const [certificationNumber, setCertificationNumber] = useState<string>("");
  const [isSendNumber, setIsSendNumber] = useRecoilState(
    sendCertificationNumberStatus
  );
  const [result, setResult] = useState<IFindIdResultProps>();

  const goToCertification = (e: React.ChangeEvent<HTMLButtonElement>) => {
    //certification api 통신
    setEmail("");
    setIdPart(e.target.name);
    setIsSendNumber((prev) => ({ ...prev, findIdSendNumber: true }));
  };

  const goToResult = (e: React.ChangeEvent<HTMLButtonElement>) => {
    //certification 인증 통신
    const { name, id } = {
      name: "장정원",
      id: "jangjang",
    };
    setResult({ name: name, resultId: id });
    setIsSendNumber((prev) => ({ ...prev, findIdSendNumber: false }));
    setIdPart(e.target.name);
    setCertificationNumber("");
  };

  return {
    idPart,
    email,
    setEmail,
    goToCertification,
    certificationNumber,
    setCertificationNumber,
    goToResult,
    result,
  };
};

export default useFindId;
