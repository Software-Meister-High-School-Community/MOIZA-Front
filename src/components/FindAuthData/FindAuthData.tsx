import React, { useEffect, useState } from "react";
import * as FDA from "./FindAuthData.style";
import * as CONST from "./constant/index";
import FindIdForm from "./FindIdForm";
import FindPwForm from "./FindPwForm";
import { useRecoilState } from "recoil";
import { sendCertificationNumberStatus } from "../../store/FindAuthData/certificationStatus";
import CertificationAlert from "./CertificationAlert";

const FindAuthData: React.FC = () => {
  const [isSendNumber, setIsSendNumber] = useRecoilState(
    sendCertificationNumberStatus
  );

  //default는 findid 페이지
  const [tab, setTab] = useState("아이디 찾기");

  useEffect(() => {
    setIsSendNumber((prev) => ({
      ...prev,
      findIdSendNumber: false,
      findPwSendNumber: false,
    }));
  }, []);

  const SendNumberStatus =
    isSendNumber.findIdSendNumber || isSendNumber.findPwSendNumber;

  return (
    <FDA.FindAuthDataBox>
      {SendNumberStatus ? (
        <CertificationAlert />
      ) : (
        <FDA.FindAuthDataTitle>아이디 / 비밀번호 찾기</FDA.FindAuthDataTitle>
      )}
      <FDA.FindAuthDataFormWrap>
        <>
          {!SendNumberStatus && (
            <FDA.FindAuthDataTabWrap>
              {CONST.FindAuthDataKind.map((item, index) => {
                return (
                  <FDA.FindAuthDataTab
                    seleted={item.title === tab}
                    onClick={() => {
                      setTab(item.title);
                    }}
                    key={index}
                  >
                    {item.title}
                  </FDA.FindAuthDataTab>
                );
              })}
            </FDA.FindAuthDataTabWrap>
          )}
        </>
        <>{tab === "아이디 찾기" && <FindIdForm setTab={setTab} />}</>
        <>{tab === "비밀번호 찾기" && <FindPwForm />}</>
      </FDA.FindAuthDataFormWrap>
    </FDA.FindAuthDataBox>
  );
};

export default FindAuthData;
