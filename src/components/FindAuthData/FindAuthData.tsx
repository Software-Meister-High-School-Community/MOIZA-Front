import React, { useEffect, useState } from "react";
import * as FDA from "./FindAuthData.style";
import * as CONST from "./constant/index";
import FindIdForm from "./FindIdForm";
import { Route, Routes, useNavigate } from "react-router";
import FindPwForm from "./FindPwForm";
import { useRecoilState } from "recoil";
import { sendCertificationNumberStatus } from "../../store/FindAuthData/certificationStatus";
import CertificationAlert from "./CertificationAlert";

const FindAuthData: React.FC = () => {
  const [isSendNumber, setIsSendNumber] = useRecoilState(
    sendCertificationNumberStatus
  );

  const navigate = useNavigate();

  useEffect(() => {
    //default는 findid 페이지
    navigate("/findauthdata/findid");

    setIsSendNumber((prev) => ({
      ...prev,
      findIdSendNumber: false,
      findPwSendNumber: false,
    }));
  }, []);

  const [tab, setTab] = useState("아이디 찾기");

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
        {!SendNumberStatus && (
          <FDA.FindAuthDataTabWrap>
            {CONST.FindAuthDataKind.map((item) => {
              return (
                <FDA.FindAuthDataTab
                  seleted={item.title === tab}
                  onClick={() => {
                    navigate(item.queryName);
                    setTab(item.title);
                  }}
                >
                  {item.title}
                </FDA.FindAuthDataTab>
              );
            })}
          </FDA.FindAuthDataTabWrap>
        )}
        <Routes>
          <Route path="" element={<FindIdForm />} />
          <Route path="findid/*" element={<FindIdForm />} />
          <Route path="findpw/*" element={<FindPwForm />} />
        </Routes>
      </FDA.FindAuthDataFormWrap>
    </FDA.FindAuthDataBox>
  );
};

export default FindAuthData;
