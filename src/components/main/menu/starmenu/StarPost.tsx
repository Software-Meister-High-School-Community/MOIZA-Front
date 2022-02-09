import React from "react";
import * as S from "./style";
import HeartButton from "../../../Common/Button/HeartButton/HeartButton";
import BookRead from "../../../../assets/img/main/bookRead.svg";
import Question from "../../../../assets/img/main/Question.svg";

interface PostType {
  menu: string;
}

const StarPost: React.FC<PostType> = (menu) => {
  return (
    <>
      <S.StarPost>
        <S.PostHead>
          <S.UserDiv>
            <S.PostIcon src={Question} alt="" />
            <S.PostUser>OOO님의 게시물</S.PostUser>
          </S.UserDiv>
          <S.PostField>Design</S.PostField>
        </S.PostHead>
        <S.PostText>{menu.menu}</S.PostText>
        <S.PostFooter>
          <HeartButton />
          <S.HeartCount>123</S.HeartCount>
          <S.PostDate>01/21 8:29</S.PostDate>
        </S.PostFooter>
      </S.StarPost>
    </>
  );
};

export default StarPost;
