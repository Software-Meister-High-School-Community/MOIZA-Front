import React, { useState } from "react";
import * as S from "./style";
import BookRead from "../../../assets/img/main/bookRead.svg";
import Question from "../../../assets/img/main/Question.svg";
import onHeart from "../../../assets/img/main/onHeart.svg";
import offHeart from "../../../assets/img/main/offHeart.svg";

const StarMenu: React.FC = () => {
  const PostCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [liked, setLiked] = useState(false);

  const onClickHeart = (item: any) => {
    if (!liked) {
      setLiked(true);
      console.log("like");
    } else {
      setLiked(false);
      console.log("Not like");
    }
  };

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
            <S.PostHeart
              src={liked ? onHeart : offHeart}
              alt=""
              onClick={onClickHeart}
            />
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
