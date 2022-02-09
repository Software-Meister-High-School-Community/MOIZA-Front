import React from "react";
import TempPost from "./temppost/TempPost";
import * as S from "./style";

const TempList: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Title>
        <p>임시저장 게시물</p>
      </S.Title>
      <S.ListDiv>
        <TempPost />
        <TempPost />
      </S.ListDiv>
    </S.Wrapper>
  );
};

export default TempList;
