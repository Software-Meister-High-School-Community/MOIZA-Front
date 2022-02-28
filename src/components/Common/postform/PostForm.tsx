import React from "react";
import * as S from "./style";
import BookRead from "../../../assets/img/common/normalPostIcon.svg";
import Question from "../../../assets/img/common/questionPostIcon.svg";
import view from "../../../assets/img/common/openEye.svg";
import heart from "../../../assets/img/common/onHeart.svg";
import Comment from "../../../assets/img/common/comment.svg";

const PostForm: React.FC = () => {
  return (
    <S.Wrapper>
      <S.List fixed={true}>
        <img src={BookRead} alt="BookRed 이미지" />
        <h1>모이자에 오신 여러분 환영합니다!</h1>
        <S.Date>
          <span>22/01/21 8:29</span>
          <S.Line />
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
