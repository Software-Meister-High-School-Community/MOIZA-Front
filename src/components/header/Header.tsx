import React, { useState } from "react";
import * as H from "./Header.styled";
import headerLogo from "../../assets/img/header/headerLogo.svg";
import searchImg from "../../assets/img/header/searchImg.svg";
import profileImg from "../../assets/img/header/profileImg.svg";
import noticeImg from "../../assets/img/header/alarmImg.svg";
import Alarm from "./alarm";
import CategoryDropdown from "./category/CategoryDropdown";

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
            <H.ItemImg src={searchImg} />
          </H.StyleLink>
          <H.ItemImg src={profileImg} />

          <H.ItemImg
            src={noticeImg}
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
