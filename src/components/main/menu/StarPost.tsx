import React, { useState } from "react";
import * as S from "./style";
import BookRead from "../../../assets/img/main/bookRead.svg";
import Question from "../../../assets/img/main/Question.svg";
import onHeart from "../../../assets/img/main/onHeart.svg";
import offHeart from "../../../assets/img/main/offHeart.svg";

interface PostType {
  menu: string;
}

const StarPost: React.FC<PostType> = (menu) => {
  const [icon, setIcon] = useState(false);
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

  const onChangeIcon = () => {
    if (!icon) {
      setIcon(true);
      console.log("book");
    } else {
      setIcon(false);
      console.log("Question");
    }
  };

  return (
    <>
      <S.StarPost>
        <S.PostHead>
          <S.PostIcon src={icon ? BookRead : Question} alt="" />
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

export default StarPost;
