import React from "react";
import * as S from "./style";
import fixed from "../../../assets/img/admin/icons/fixedNotification.svg";
import nomal from "../../../assets/img/admin/icons/notification.svg";
import view from "../../../assets/img/admin/icons/view.svg";
import heart from "../../../assets/img/admin/icons/heart.svg";
import Line from "../../../assets/img/notice/Line.svg";

const NoticePost: React.FC = () => {
  return (
    <S.Wrapper>
      <S.List fixed={true}>
        <img src={fixed} />
        <h1>모이자에 오신 여러분 환영합니다!</h1>
        <S.Date>
          <span>22/01/21 8:29</span>
          <img src={Line} alt="" />
        </S.Date>
        <S.Views>
          <img src={view} />
          <span>1.2천</span>
        </S.Views>
        <S.Hearts>
          <img src={heart} />
          <span>599</span>
        </S.Hearts>
      </S.List>
    </S.Wrapper>
  );
};

export default NoticePost;
