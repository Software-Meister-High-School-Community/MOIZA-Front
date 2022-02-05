import React, { useEffect } from "react";
import * as R from "./Recommendation.style";
import * as IMGS from "../../assets/img/index";
import { useSelectColor } from "../../hooks/recommendation/useSelectColor";
const Recommendation = () => {
  const items = [
    {
      id: 0,
      type: "q",
      title: "팝아트에 대해서 질문 드립니다",
      name: "장정원",
      date: "22/01/23  10:23",
    },
    {
      id: 0,
      type: "t",
      title: "팝아트에 대해서 질문 드립니다",
      name: "장정원",
      date: "22/01/23  10:23",
    },
    {
      id: 0,
      type: "q",
      title: "이런 꿀팁 몰랐을껄?",
      name: "장정원",
      date: "22/01/23  10:23",
    },
    {
      id: 0,
      type: "q",
      title: "이런 꿀팁 몰랐을껄?",
      name: "장정원",
      date: "22/01/23  10:23",
    },
    {
      id: 0,
      type: "t",
      title: "팝아트에 대해 질문 드립니다",
      name: "장정원",
      date: "22/01/23  10:23",
    },
    {
      id: 0,
      type: "q",
      title: "팝아트",
      name: "장정원",
      date: "22/01/23  10:23",
    },
  ];
  return (
    <R.Wrapper>
      <R.Phrases>팔로잉한 유저의 추천게시물</R.Phrases>
      <R.ItemContainer>
        {items.map((item) => {
          return (
            <R.ItemBox key={item.id} backgroundColor={useSelectColor}>
              {item.type === "q" ? (
                <R.ItemImg src={IMGS.Question} />
              ) : (
                <R.ItemImg src={IMGS.Normal} />
              )}
              <R.ItemTitle>{item.title}</R.ItemTitle>
              <R.User>{item.name}님의 게시물</R.User>
              <R.Date>{item.date}</R.Date>
            </R.ItemBox>
          );
        })}
      </R.ItemContainer>
      <R.AddBtn>더보기</R.AddBtn>
    </R.Wrapper>
  );
};

export default Recommendation;
