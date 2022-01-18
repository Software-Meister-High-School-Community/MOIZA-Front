import React from "react";
import StarMenu from "../StarMenu";
import NoticeMenu from "../NoticeMenu";
import * as S from "./style";

const MainMenu: React.FC = () => {
  return (
    <S.MenuWrapper>
      <S.StarMenuDiv>
        <StarMenu />
      </S.StarMenuDiv>
      <S.NoticeMenuDiv>
        <NoticeMenu />
      </S.NoticeMenuDiv>
    </S.MenuWrapper>
  );
};

export default MainMenu;
