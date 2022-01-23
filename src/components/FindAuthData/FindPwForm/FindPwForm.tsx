import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router";
import { useRecoilState, useResetRecoilState } from "recoil";
import { sendCertificationNumberStatus } from "../../../store/FindAuthData/certificationStatus";
import {
  findPwCertificationNumber,
  findPwData,
  findPwResetData,
} from "../../../store/FindAuthData/findCheckDataAtom";
import {
  findCertificationNullCheck,
  findPwDataNullCheck,
  findPwResetDataNullCheck,
} from "../../../util/findAuthDataNullCheck";
import SubmitButton from "../../Common/Button/SubmitButton";
import { FindAuthDataSubmitButtonWrap } from "../FindAuthData.style";
import FindPwCertification from "./FindPwCertification";
import FindPwCheck from "./FindPwCheck";
import { FindPwFormBox, FindPwFormWrap } from "./FindPwForm.style";
import FindPwReset from "./FindPwReset";
import FindPwResult from "./FindPwResult";

const FindPwForm: React.FC = () => {
  const navigate = useNavigate();

  const [checkData, setCheckData] = useRecoilState(findPwData);
  const [resetData, setResetData] = useRecoilState(findPwResetData);
  const [isSendNumber, setIsSendNumber] = useRecoilState(
    sendCertificationNumberStatus
  );
  const [checkNumber, setCheckNumber] = useRecoilState(
    findPwCertificationNumber
  );

  const resetCheckData = useResetRecoilState(findPwData);
  const resetResetData = useResetRecoilState(findPwResetData);

  const certification = findCertificationNullCheck(checkNumber);
  const checkPartIsNull = findPwDataNullCheck(checkData);
  const resetPartIsNull = findPwResetDataNullCheck(resetData);

  const goToCertification = () => {
    navigate("certification");
    setIsSendNumber((prev) => ({ ...prev, findPwSendNumber: true }));
  };

  const goToResetPw = () => {
    setIsSendNumber((prev) => ({ ...prev, findPwSendNumber: false }));
    navigate("findpwreset");
  };

  useEffect(() => {
    resetCheckData();
    resetResetData();
  }, [resetCheckData, resetResetData]);

  return (
    <>
      <FindPwFormBox isCertification={isSendNumber.findPwSendNumber}>
        <FindPwFormWrap>
          <Routes>
            <Route path="" element={<FindPwCheck />} />
            <Route path="certification" element={<FindPwCertification />} />
            <Route path="findpwreset" element={<FindPwReset />} />
            <Route path="findpwresult" element={<FindPwResult />} />
          </Routes>
        </FindPwFormWrap>
      </FindPwFormBox>
      <FindAuthDataSubmitButtonWrap>
        <Routes>
          <Route
            path=""
            element={
              <SubmitButton
                big
                text={"다음"}
                blue
                disable={checkPartIsNull}
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
                blue
                disable={certification}
                handleClick={goToResetPw}
              />
            }
          />
          <Route
            path="findpwreset"
            element={
              <SubmitButton
                big
                text={"다음"}
                blue
                handleClick={() => navigate("findpwresult")}
                disable={resetPartIsNull}
              />
            }
          />

          <Route
            path="findpwresult"
            element={
              <SubmitButton
                big
                text={"로그인 하기"}
                blue
                handleClick={() => navigate("/login")}
              />
            }
          />
        </Routes>
      </FindAuthDataSubmitButtonWrap>
    </>
  );
};

export default FindPwForm;
