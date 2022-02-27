import React from "react";
import fixed from "../../../assets/img/notice/fixedNotification.svg";
import nomal from "../../../assets/img/notice/notification.svg";
import Path from "../../Common/path";
import { NoticePostPathArr } from "../constants";
import * as S from "./style";

const ShowNotice: React.FC = () => {
  return (
    <S.Wrapper>
      <S.NoticeHeadDiv>
        <Path pathArray={NoticePostPathArr} />
      </S.NoticeHeadDiv>
      <S.PostDiv>
        <S.PostHead>
          <S.PostLogo src={fixed} alt="" />
          <S.PostName fixed={true}>모이자에 오신 여러분 환영합니다</S.PostName>
          <S.PostTime>22/01/21 8:30</S.PostTime>
        </S.PostHead>
        <S.PostBody>
          <S.BodyText>어쩌구,,저쩌구</S.BodyText>
        </S.PostBody>
      </S.PostDiv>
    </S.Wrapper>
  );
};

export default ShowNotice;
