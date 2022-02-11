import React from "react";
import * as S from "./style";
import TempPen from "../../../../assets/img/post/TempPen.svg";

const TempPost: React.FC = () => {
  return (
    <S.Wrapper>
      <S.List>
        <S.Title>
          <img src={TempPen} alt="" />
          <h1>질문이써용~~~</h1>
        </S.Title>
        <S.State>
          <p>수정</p>
        </S.State>
      </S.List>
    </S.Wrapper>
  );
};

export default TempPost;
