import React, { ReactNode, useState } from "react";
import * as S from "./style";
import BookRead from "../../../assets/img/main/bookRead.svg";
import Question from "../../../assets/img/main/Question.svg";
import onHeart from "../../../assets/img/main/onHeart.svg";
import offHeart from "../../../assets/img/main/offHeart.svg";

interface PostType {
  menu: string;
}

const StarPost: React.FC<PostType> = (menu) => {
  const [liked, setLiked] = useState(false);

  const onClickHeart = () => {
    if (!liked) {
      setLiked(true);
      console.log("like");
    } else {
      setLiked(false);
      console.log("Not like");
    }
  };

  return (
    <>
      <S.StarPost>
        <S.PostHead>
          <S.PostIcon src={Question} alt="" />
          <S.PostField>Design</S.PostField>
        </S.PostHead>
        <S.PostText>{menu.menu}</S.PostText>
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
};

const StarMenu: React.FC = () => {
  const PostCount = [
    "3줄넣기세줄넣기 세줄넣기 세줄넣기 3줄 인기게시물 제목은 3줄 세줄을넣자 두 줄말고 세줄을 넣자",
    "오늘의 할 일 멋지게 자기 내일의 할 일 모이자 들어가기",
    "오늘의 할 일 멋지게 자기 내일의 할 일 모이자 들어가기",
    "모이자를 만나고 내 인생이 달라졌다~",
    "오늘의 할 일 멋지게 자기 내일의 할 일 모이자 들어가기",
    "오늘의 할 일 멋지게 자기 내일의 할 일 모이자 들어가기",
    "오늘의 할 일 멋지게 자기 내일의 할 일 모이자 들어가기",
    "3줄넣기세줄넣기 세줄넣기 세줄넣기 3줄 인기게시물 제목은 3줄 세줄을 넣자 두 줄말고 세줄을 넣자",
    "제목은 이런식으로",
    "3줄넣기세줄넣기 세줄넣기 세줄넣기 3줄 인기게시물 제목은 3줄 세줄을 넣자 두 줄말고 세줄을 넣자",
  ];

  const menuList = PostCount.map((menu, index) => {
    return (
      <>
        <StarPost menu={menu} />
      </>
    );
  });

  return (
    <S.Wrapper>
      <div>
        <S.StarName width="220px" height="35px" margin="0 542px 21px 0">
          일일 인기게시물
        </S.StarName>
        <S.HR width="760px" height="3px" background="#99B6FF" />
        <S.PostList>{menuList}</S.PostList>
      </div>
    </S.Wrapper>
  );
};

export default StarMenu;
