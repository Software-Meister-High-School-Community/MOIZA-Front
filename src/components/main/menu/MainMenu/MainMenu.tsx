import React from "react";
import StarMenu from "../StarMenu";
import NoticeMenu from "../NoticeMenu";
import * as S from "./style";
import Footer from "../../../footer/Footer";

const MainMenu: React.FC = () => {
  return (
    <>
      <S.MenuWrapper>
        <S.MenuDiv>
          <S.StarMenuDiv>
            <StarMenu />
          </S.StarMenuDiv>
          <S.NoticeMenuDiv>
            <NoticeMenu />
          </S.NoticeMenuDiv>
        </S.MenuDiv>
        <Footer />
      </S.MenuWrapper>
    </>
  );
};

export default MainMenu;
