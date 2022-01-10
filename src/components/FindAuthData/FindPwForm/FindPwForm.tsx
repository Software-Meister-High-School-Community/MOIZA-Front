import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router";
import { useRecoilState, useResetRecoilState } from "recoil";
import {
  findPwData,
  findPwResetData,
} from "../../../store/FindAuthData/findCheckDataAtom";
import {
  findPwDataNullCheck,
  findPwResetDataNullCheck,
} from "../../../util/findAuthDataNullCheck";
import SubmitButton from "../../Common/Button/SubmitButton";
import { FindAuthDataSubmitButtonWrap } from "../FindAuthData.style";
import FindPwCheck from "./FindPwCheck";
import { FindPwFormBox, FindPwFormWrap } from "./FindPwForm.style";
import FindPwReset from "./FindPwReset";
import FindPwResult from "./FindPwResult";

const FindPwForm: React.FC = () => {
  const navigate = useNavigate();

  const [checkData, setCheckData] = useRecoilState(findPwData);
  const [resetData, setResetData] = useRecoilState(findPwResetData);
  const resetCheckData = useResetRecoilState(findPwData);
  const resetResetData = useResetRecoilState(findPwResetData);

  useEffect(() => {
    resetCheckData();
    resetResetData();
  }, [resetCheckData, resetResetData]);

  const checkPartIsNull = findPwDataNullCheck(checkData);
  const resetPartIsNull = findPwResetDataNullCheck(resetData);

  const { pathname } = useLocation();
  const querys = pathname.slice(1, pathname.length).split("/");
  const query = querys[querys.length - 1];

  const onClickCertification = () => {
    navigate("findpwreset");
  };

  const onClickResetPw = () => {
    navigate("findpwresult");
  };

  return (
    <>
      <FindPwFormBox isReset={query === "findpwresult"}>
        <FindPwFormWrap>
          <Routes>
            <Route path="" element={<FindPwCheck />} />
            <Route path="findpwreset" element={<FindPwReset />} />
            <Route path="findpwresult" element={<FindPwResult />} />
          </Routes>
        </FindPwFormWrap>
      </FindPwFormBox>
      <FindAuthDataSubmitButtonWrap>
        {query === "findpw" && (
          <SubmitButton
            big
            text={"다음"}
            blue
            disable={checkPartIsNull}
            handleClick={onClickCertification}
          />
        )}
        {query === "findpwreset" && (
          <SubmitButton
            big
            text={"다음"}
            blue
            handleClick={onClickResetPw}
            disable={resetPartIsNull}
          />
        )}
        {query === "findpwresult" && (
          <SubmitButton
            big
            text={"로그인 하기"}
            blue
            handleClick={() => navigate("/login")}
          />
        )}
      </FindAuthDataSubmitButtonWrap>
    </>
  );
};

export default FindPwForm;
