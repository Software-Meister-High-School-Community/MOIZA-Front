import React from "react";
import * as S from "./style";

const NoticeMenu: React.FC = () => {
  const PostCount = [
    "모이자에 오신 여러분 환영합니다!",
    "모이자와 함께하기 위해서는",
    "모이자에 오신 여러분 환영합니다!",
    "모이자에 오신 여러분 환영합니다!",
    "모이자와 함께하기 위해서는",
    "모이자에 오신 여러분 환영합니다!",
    "모이자에 오신 여러분 환영합니다!",
  ];

  const menuList = PostCount.map((menu, index) => {
    return (
      <div>
        <S.NoticeText>{menu}</S.NoticeText>
        <S.NoticeHr />
      </div>
    );
  });

  return (
    <S.Wrapper>
      <div>
        <S.NoticeHead>
          <S.StarName width="120px" height="35px" margin="0 210px 21px 0">
            공지사항
          </S.StarName>
          <S.MoreBtn>더보기</S.MoreBtn>
        </S.NoticeHead>
        <S.HR width="380px" height="3px" background="#FFE199" />
        <S.NoticeList>{menuList}</S.NoticeList>
      </div>
    </S.Wrapper>
  );
};

export default NoticeMenu;
