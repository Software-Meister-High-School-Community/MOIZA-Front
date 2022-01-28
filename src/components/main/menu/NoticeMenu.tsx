import React from "react";
import * as S from "./style";
import { NoticePostCount } from "./constants";

const NoticeMenu: React.FC = () => {
  const menuList = NoticePostCount.map((menu, index) => {
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