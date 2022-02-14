import React from "react";
import * as S from "./style";
import BookRead from "../../../assets/img/main/bookRead.svg";
import Question from "../../../assets/img/main/Question.svg";
import view from "../../../assets/img/admin/icons/view.svg";
import heart from "../../../assets/img/admin/icons/heart.svg";
import Line from "../../../assets/img/notice/Line.svg";
import Comment from "../../../assets/img/post/Comment.svg";

const PostForm: React.FC = () => {
  return (
    <S.Wrapper>
      <S.List fixed={true}>
        <img src={BookRead} />
        <h1>모이자에 오신 여러분 환영합니다!</h1>
        <S.Date>
          <span>22/01/21 8:29</span>
          <img src={Line} alt="" />
        </S.Date>
        <S.Views>
          <img src={view} />
          <span>1.2천</span>
        </S.Views>
        <S.Comment>
          <img src={Comment} />
          <span>12</span>
        </S.Comment>
        <S.Hearts>
          <img src={heart} />
          <span>599</span>
        </S.Hearts>
      </S.List>
    </S.Wrapper>
  );
};

export default PostForm;
