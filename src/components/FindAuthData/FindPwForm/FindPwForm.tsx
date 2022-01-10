import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router";
import { useRecoilState, useResetRecoilState } from "recoil";
import { findPwData } from "../../../store/FindAuthData/findCheckDataAtom";
import { findPwDataNullCheck } from "../../../util/findAuthDataNullCheck";
import SubmitButton from "../../Common/Button/SubmitButton";
import { FindAuthDataSubmitButtonWrap } from "../FindAuthData.style";
import FindPwCheck from "./FindPwCheck";
import { FindPwFormBox, FindPwFormWrap } from "./FindPwForm.style";
import FindPwReset from "./FindPwReset";
import FindPwResult from "./FindPwResult";

const FindPwForm: React.FC = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const querys = pathname.slice(1, pathname.length).split("/");
  const query = querys[querys.length - 1];

  const [checkData, setCheckData] = useRecoilState(findPwData);
  const resetCheckData = useResetRecoilState(findPwData);

  useEffect(() => {
    resetCheckData();
  }, [resetCheckData]);

  const isNull = findPwDataNullCheck(checkData);

  const onClickCertification = () => {
    navigate("findpwreset");
  };

  const onClickResetPw = () => {
    navigate("findpwresult");
  };

  return (
    <>
      <FindPwFormBox>
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
            disable={isNull}
            handleClick={onClickCertification}
          />
        )}
        {query === "findpwreset" && (
          <SubmitButton big text={"다음"} blue handleClick={onClickResetPw} />
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
