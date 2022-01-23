import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router";
import { useRecoilState, useResetRecoilState } from "recoil";
import { IFindIdDataProps } from "../../../interface/FindAuthData/FindAuthData.type";
import { sendCertificationNumberStatus } from "../../../store/FindAuthData/certificationStatus";
import {
  FindIdCertificationNumber,
  findIdCheckData,
} from "../../../store/FindAuthData/findCheckDataAtom";
import {
  findCertificationNullCheck,
  findIdDataNullCheck,
} from "../../../util/findAuthDataNullCheck";
import SubmitButton from "../../Common/Button/SubmitButton";
import { FindAuthDataSubmitButtonWrap } from "../FindAuthData.style";
import FindIdCertification from "./FindIdCertification";
import * as FIF from "./FindIdForm.style";
import FindIdResult from "./FindIdResult";

const FindIdForm: React.FC = () => {
  const navigate = useNavigate();

  const [checkData, setCheckData] = useRecoilState(findIdCheckData);
  const [isSendNumber, setIsSendNumber] = useRecoilState(
    sendCertificationNumberStatus
  );
  const [certificationNumber, setCertificationNumber] = useRecoilState(
    FindIdCertificationNumber
  );
  const [resultName, setResultName] = useState("");
  const [resultId, setResultId] = useState("");

  const resetCheckData = useResetRecoilState(findIdCheckData);
  const resetCertification = useResetRecoilState(FindIdCertificationNumber);

  const checkDataIsNull = findIdDataNullCheck(checkData);
  const certificationIsNull = findCertificationNullCheck(certificationNumber);

  const goToResult = () => {
    setIsSendNumber((prev) => ({ ...prev, findIdSendNumber: false }));
    navigate("result");
    setResultName("장정원");
    setResultId("jangjang");
  };

  const goToCertification = () => {
    setIsSendNumber((prev) => ({ ...prev, findIdSendNumber: true }));
    navigate("certification");
  };

  useEffect(() => {
    resetCheckData();
    resetCertification();
  }, []);

  const { email } = checkData;

  return (
    <>
      <FIF.FindIdFormBox>
        <FIF.FindIdFormWrap>
          <Routes>
            <Route
              path=""
              element={
                <>
                  <FIF.FindIdFormTitle>이메일 인증</FIF.FindIdFormTitle>
                  <FIF.FindIdFormInputWrap>
                    <FIF.FindIdFormTextInputWrap>
                      <FIF.FindIdFormTextInput
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
                    </FIF.FindIdFormTextInputWrap>
                  </FIF.FindIdFormInputWrap>
                </>
              }
            />
            <Route path="certification" element={<FindIdCertification />} />
            <Route
              path="result"
              element={<FindIdResult name={resultName} resultId={resultId} />}
            />
          </Routes>
        </FIF.FindIdFormWrap>
      </FIF.FindIdFormBox>
      <FindAuthDataSubmitButtonWrap>
        <Routes>
          <Route
            path=""
            element={
              <SubmitButton
                big
                text={"다음"}
                disable={checkDataIsNull}
                blue
                handleClick={goToCertification}
              />
            }
          />
          <Route
            path="certification"
            element={
              <SubmitButton
                big
                text={"다음"}
                disable={certificationIsNull}
                blue
                handleClick={goToResult}
              />
            }
          />
          <Route
            path="result"
            element={
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
            }
          />
        </Routes>
      </FindAuthDataSubmitButtonWrap>
    </>
  );
};

export default FindIdForm;
