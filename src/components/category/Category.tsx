import React from "react";
import * as C from "./Category.style";
import human1 from "../../assets/img/category/human1.svg";
import human2 from "../../assets/img/category/human2.svg";
import default1 from "../../assets/img/category/default1.svg";
import default2 from "../../assets/img/category/default2.svg";
import default3 from "../../assets/img/category/default3.svg";

const Category: React.FC = () => {
  return (
    <C.Wrapper>
      <C.Container>
        <C.TitleBox>
          <C.Title>게시물 카테고리</C.Title>
          <C.Line />
        </C.TitleBox>

        <C.Img src={human1} alt="" top="180px" left="1200px" />
        <C.Img src={human2} alt="" top="375px" left="-20px" />

        <C.Item>Front-End</C.Item>
        <C.Item>Back-End</C.Item>
        <C.Item>
          <C.ItemImg src={default1} alt="" />
        </C.Item>
        <C.Item>IOS</C.Item>
        <C.Item>Android</C.Item>
        <C.Item>Design</C.Item>
        <C.Item>Game</C.Item>
        <C.Item>
          <C.ItemImg src={default2} alt="" />
        </C.Item>
        <C.Item>Security</C.Item>
        <C.Item>Embedded</C.Item>
        <C.Item>AI</C.Item>
        <C.Item>
          <C.ItemImg src={default3} alt="" />
        </C.Item>
      </C.Container>
    </C.Wrapper>
  );
};

export default Category;
