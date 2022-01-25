import React, { useState } from "react";
import fixed from "../../../assets/img/admin/icons/fixedNotification.svg";
import nomal from "../../../assets/img/admin/icons/notification.svg";
import onHeart from "../../../assets/img/main/onHeart.svg";
import offHeart from "../../../assets/img/main/offHeart.svg";
import eye from "../../../assets/img/notice/eye.svg";
import Path from "../../Common/path";
import { NoticePostPathArr } from "../constants";
import * as S from "./style";

const ShowNotice: React.FC = () => {
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
    <S.Wrapper>
      <S.NoticeHeadDiv>
        <Path pathArray={NoticePostPathArr} />
      </S.NoticeHeadDiv>
      <S.PostDiv>
        <S.PostHead>
          <S.PostLogo src={fixed} alt="" />
          <S.PostName fixed={true}>모이자에 오신 여러분 환영합니다</S.PostName>
          <S.PostTime>22/01/21 8:30</S.PostTime>
        </S.PostHead>
        <S.PostBody>
          <S.BodyText>어쩌구,,저쩌구</S.BodyText>
        </S.PostBody>
        <S.BodyFooter>
          <S.HeartDiv>
            <S.PostHeart
              src={liked ? onHeart : offHeart}
              alt=""
              onClick={onClickHeart}
            />
            <S.HeartCount>123</S.HeartCount>
          </S.HeartDiv>
          <S.EyeDiv>
            <S.eyeImg src={eye} alt="" />
            <S.EyeCount>1.2천</S.EyeCount>
          </S.EyeDiv>
        </S.BodyFooter>
      </S.PostDiv>
    </S.Wrapper>
  );
};

export default ShowNotice;
