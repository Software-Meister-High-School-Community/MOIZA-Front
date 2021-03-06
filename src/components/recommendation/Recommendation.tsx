import React, { useEffect } from "react";
import * as R from "./Recommendation.style";
import { useSelectColor } from "../../hooks/recommendation/useSelectColor";
import { dateTransform } from "../../util/dateTransform";
import questionIcon from "../../assets/img/recommendation/questionIcon.svg";
import commonIcon from "../../assets/img/recommendation/commonIcon.svg";
const Recommendation = () => {
  const items = [
    {
      id: 0,
      type: "q",
      title: "팝아트에 대해서 질문 드립니다",
      name: "장정원",
      date: "2021-10-20T12:12:12",
    },
    {
      id: 0,
      type: "t",
      title: "팝아트에 대해서 질문 드립니다",
      name: "장정원",
      date: "2021-10-20T12:12:12",
    },
    {
      id: 0,
      type: "q",
      title: "이런 꿀팁 몰랐을껄?",
      name: "장정원",
      date: "2021-10-20T12:12:12",
    },
    {
      id: 0,
      type: "q",
      title: "이런 꿀팁 몰랐을껄?",
      name: "장정원",
      date: "2021-10-20T12:12:12",
    },
    {
      id: 0,
      type: "t",
      title: "팝아트에 대해 질문 드립니다",
      name: "장정원",
      date: "2021-10-20T12:12:12",
    },
    {
      id: 0,
      type: "q",
      title: "팝아트",
      name: "장정원",
      date: "2021-10-20T12:12:12",
    },
  ];
  return (
    <R.Wrapper>
      <R.Phrases>팔로잉한 유저의 추천게시물</R.Phrases>
      <R.ItemContainer>
        {items.map(({ id, type, title, name, date }) => {
          return (
            <R.ItemBox key={id} backgroundColor={useSelectColor}>
              {type === "q" ? (
                <R.ItemImg src={questionIcon} />
              ) : (
                <R.ItemImg src={commonIcon} />
              )}
              <R.ItemTitle>{title}</R.ItemTitle>
              <R.User>{name}님의 게시물</R.User>
              <R.Date>{dateTransform(date)}</R.Date>
            </R.ItemBox>
          );
        })}
      </R.ItemContainer>
      <R.AddBtn>더보기</R.AddBtn>
    </R.Wrapper>
  );
};

export default Recommendation;
