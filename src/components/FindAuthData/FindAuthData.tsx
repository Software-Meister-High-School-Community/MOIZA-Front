import React, { useState } from "react";
import {
  FindAuthDataBox,
  FindAuthDataFormWrap,
  FindAuthDataTab,
  FindAuthDataTabWrap,
  FindAuthDataTitle,
} from "./FindAuthData.style";
import * as CONST from "./constant/index";
import FindIdForm from "./FindIdForm";

const FindAuthData: React.FC = () => {
  const [tab, setTab] = useState("아이디 찾기");

  return (
    <FindAuthDataBox>
      <FindAuthDataTitle>아이디 / 비밀번호 찾기</FindAuthDataTitle>
      <FindAuthDataFormWrap>
        <FindAuthDataTabWrap>
          {CONST.FindAuthDataKind.map((item) => {
            return (
              <FindAuthDataTab
                seleted={item === tab}
                onClick={() => setTab(item)}
              >
                {item}
              </FindAuthDataTab>
            );
          })}
        </FindAuthDataTabWrap>
        {tab === "아이디 찾기" && <FindIdForm />}
      </FindAuthDataFormWrap>
    </FindAuthDataBox>
  );
};

export default FindAuthData;
