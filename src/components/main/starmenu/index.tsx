import React from "react";
import * as S from "./style";
import Question from "../../../assets/img/main/Question.svg";
import onHeart from "../../../assets/img/main/onHeart.svg";
import offHeart from "../../../assets/img/main/offHeart.svg";

const StarMenu: React.FC = () => {
  const PostCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const menuList = PostCount.map((menu, index) => {
    return (
      <>
        <S.StarPost>
          <S.PostHead>
            <S.PostIcon src={Question} alt="" />
            <S.PostField>Design</S.PostField>
          </S.PostHead>
          <S.PostText>
            3줄넣기세줄넣기 세줄넣기 세줄넣기 3줄 인기게시물 제목은 3줄 세줄을
            넣자 두 줄말고 세줄을 넣자
          </S.PostText>
          <S.PostFooter>
            <S.PostHeart src={onHeart} alt="" />
            <S.HeartCount>123</S.HeartCount>
            <S.PostLink>바로가기</S.PostLink>
          </S.PostFooter>
        </S.StarPost>
      </>
    );
  });

  return (
    <S.Wrapper>
      <div>
        <S.StarName>일일 인기게시물</S.StarName>
        <S.HR />
        <S.PostList>{menuList}</S.PostList>
      </div>
    </S.Wrapper>
  );
};

export default StarMenu;
