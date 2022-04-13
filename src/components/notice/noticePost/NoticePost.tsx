import React from "react";
import * as S from "./style";
import fixed from "../../../assets/img/notice/fixedNotification.svg";
import nomal from "../../../assets/img/notice/notification.svg";

const NoticePost: React.FC = () => {
  return (
    <S.Wrapper>
      <S.List fixed={true}>
        <img src={fixed} alt="" />
        <h1>모이자에 오신 여러분 환영합니다!</h1>
        <S.Date>
          <span>22/01/21 8:29</span>
        </S.Date>
      </S.List>
    </S.Wrapper>
  );
};

export default NoticePost;
