import React, { useState } from "react";
import * as H from "./Header.style";
import Notice from "./notice";
import CategoryDropdown from "./category/CategoryDropdown";
import headerLogo from "../../assets/img/MOIZALogo/englishHorizontalType.svg";
import searchIcon from "../../assets/img/common/searchIcon.svg";
import profileIcon from "../../assets/img/header/profileIcon.svg";
import noticeIcon from "../../assets/img/header/noticeIcon.svg";

const Header: React.FC = () => {
  const loginCheck = localStorage.getItem("Token");
  const [noticeState, setNoticeState] = useState<boolean>(false);

  const handleDisplay: any = () => {
    let isDisplay = "none";
    noticeState ? (isDisplay = "block") : (isDisplay = "none");
    return isDisplay;
  };

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
            onClick={() => setNoticeState(!noticeState)}
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
      <Notice
        noticeState={noticeState}
        noticeClose={() => setNoticeState(false)}
      />
    </>
  );
};

export default Header;
