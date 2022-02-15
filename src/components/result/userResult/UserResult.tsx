import React from "react";
import * as UR from "./UserResult.style";
import Slider from "react-slick";
const UserResult = () => {
  const settings = {
    // infinite: true,
    speed: 500,
    // slidesToShow: 7,
    slidesToScroll: 1,
  };
  const users = [
    { type: "s", name: "정우재", schoolName: "대구소프트웨어마이스터고" },
    { type: "s", name: "정우재", schoolName: "대구소프트웨어마이스터고" },
    { type: "s", name: "정우재", schoolName: "대구소프트웨어마이스터고" },
    { type: "s", name: "정우재", schoolName: "대구소프트웨어마이스터고" },
    { type: "s", name: "정우재", schoolName: "대구소프트웨어마이스터고" },
  ];
  return (
    <UR.Wrapper>
      <UR.Title>유저</UR.Title>
      {/* <UR.Container> */}
      <Slider {...settings}>
        <UR.ItemBox>
          <UR.Img />
          <UR.StudentType>재학생</UR.StudentType>
          <UR.Name>장정원</UR.Name>
          <UR.SchoolName>미림마이스터고</UR.SchoolName>
        </UR.ItemBox>
      </Slider>
      {/* </UR.Container> */}
    </UR.Wrapper>
  );
};

export default UserResult;
