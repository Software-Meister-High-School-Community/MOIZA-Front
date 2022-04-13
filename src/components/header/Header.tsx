import React, { useState } from "react";

import * as H from "./Header.style";
import Alarm from "./alarm";
import CategoryDropdown from "./category/CategoryDropdown";
import headerLogo from "../../assets/img/MOIZALogo/englishHorizontalType.svg";
import searchIcon from "../../assets/img/common/searchIcon.svg";
import profileIcon from "../../assets/img/header/profileIcon.svg";
import noticeIcon from "../../assets/img/header/noticeIcon.svg";

const Header: React.FC = () => {
  const loginCheck = localStorage.getItem("Token");
  const [noticeVisible, setNoticeVisble] = useState<boolean>(false);

  return (
    <>
      <H.Container>
        <H.StyleLink to="/">
          <H.LogoImg src={headerLogo} />
        </H.StyleLink>

        <H.StyleLink to="/category">
          <CategoryDropdown />
        </H.StyleLink>

        <H.ItemContainer>
          <H.StyleLink to="/search">
            <H.ItemImg src={searchIcon} color="#000" />
          </H.StyleLink>
          <H.ItemImg src={profileIcon} />

          <H.ItemImg
            src={noticeIcon}
            onClick={() => setNoticeVisble(!noticeVisible)}
          />
        </H.ItemContainer>

        <H.AuthContainer>
          {loginCheck ? (
            <H.AuthText>로그아웃</H.AuthText>
          ) : (
            <>
              <H.StyleLink to="/signup">
                <H.AuthText>회원가입</H.AuthText>
              </H.StyleLink>
              |
              <H.StyleLink to="/login">
                <H.AuthText>로그인</H.AuthText>
              </H.StyleLink>
            </>
          )}
        </H.AuthContainer>
      </H.Container>
      <Alarm
        alarmVisible={noticeVisible}
        alarmClose={() => setNoticeVisble(false)}
      />
    </>
  );
};

export default Header;
