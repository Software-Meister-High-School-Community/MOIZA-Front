import React, { useRef } from "react";
import * as UR from "./UserResult.style";
import Slider from "react-slick";
import * as IMG from "../../../assets/img/result";
const UserResult = () => {
  const slider = React.useRef<Slider>(null);
  const users = [
    { type: "s", name: "강석현", schoolName: "대구소프트웨어마이스터고" },
    { type: "s", name: "정우재", schoolName: "대구소프트웨어마이스터고" },
    { type: "s", name: "전영준", schoolName: "대구소프트웨어마이스터고" },
    { type: "s", name: "임동현", schoolName: "대구소프트웨어마이스터고" },
    { type: "s", name: "정우재", schoolName: "대구소프트웨어마이스터고" },
    { type: "s", name: "장정원", schoolName: "대구소프트웨어마이스터고" },
    { type: "s", name: "김상은", schoolName: "대구소프트웨어마이스터고" },
  ];

  const slidesToShow = users.length < 7 ? users.length : 6;
  const settings = {
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    initialSlide: 0,
  };
  const next = () => {
    slider?.current?.slickNext();
  };
  const previous = () => {
    slider.current?.slickPrev();
  };
  return (
    <UR.Wrapper>
      {users.length > 6 && (
        <UR.ButtonBox>
          <UR.prevButton src={IMG.onPrevImg} onClick={previous} />
          <UR.NextButton src={IMG.onNextImg} onClick={next} />
        </UR.ButtonBox>
      )}
      <UR.Title>유저</UR.Title>
      <UR.Container ref={slider} {...settings}>
        {users.map(({ name }) => {
          return (
            <>
              <UR.ItemBox>
                <UR.Img />
                <UR.StudentType>재학생</UR.StudentType>
                <UR.Name>{name}</UR.Name>
                <UR.SchoolName>미림마이스터고</UR.SchoolName>
              </UR.ItemBox>
            </>
          );
        })}
      </UR.Container>
    </UR.Wrapper>
  );
};

export default UserResult;
