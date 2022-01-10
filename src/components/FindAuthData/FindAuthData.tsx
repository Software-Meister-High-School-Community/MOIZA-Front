import React, { useEffect, useState } from "react";
import {
  FindAuthDataBox,
  FindAuthDataFormWrap,
  FindAuthDataTab,
  FindAuthDataTabWrap,
  FindAuthDataTitle,
} from "./FindAuthData.style";
import * as CONST from "./constant/index";
import FindIdForm from "./FindIdForm";
import { Route, Routes, useLocation, useNavigate } from "react-router";
import FindPwForm from "./FindPwForm";

const FindAuthData: React.FC = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const querys = pathname.slice(1, pathname.length).split("/");

  useEffect(() => {
    //default는 findid 페이지
    navigate("/findauthdata/findid");
  }, [navigate]);

  const [tab, setTab] = useState("아이디 찾기");

  return (
    <FindAuthDataBox>
      <FindAuthDataTitle>아이디 / 비밀번호 찾기</FindAuthDataTitle>
      <FindAuthDataFormWrap>
        <FindAuthDataTabWrap>
          {CONST.FindAuthDataKind.map((item) => {
            return (
              <FindAuthDataTab
                seleted={item.title === tab}
                onClick={() => {
                  navigate(item.queryName);
                  setTab(item.title);
                }}
              >
                {item.title}
              </FindAuthDataTab>
            );
          })}
        </FindAuthDataTabWrap>
        <Routes>
          <Route path="" element={<FindIdForm />} />
          <Route path="findid" element={<FindIdForm />} />
          <Route path="findpw/*" element={<FindPwForm />} />
        </Routes>
      </FindAuthDataFormWrap>
    </FindAuthDataBox>
  );
};

export default FindAuthData;
