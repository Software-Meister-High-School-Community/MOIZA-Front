import React from "react";
import * as C from "./CategoryDropdown.style";
import categoryIcon from "../../../assets/img/category/categoryIcon.svg";

const CategoryDropdown: React.FC = () => {
  return (
    <C.Wrapper>
      <C.Container>
        <C.Img src={categoryIcon} />
        <C.Title>카테고리</C.Title>
      </C.Container>

      <C.ItemContainer>
        <C.Item>Front-End</C.Item>
        <C.Item>Back-End</C.Item>
        <C.Item>IOS</C.Item>
        <C.Item>Android</C.Item>
        <C.Item>Deign</C.Item>
        <C.Item>Game</C.Item>
        <C.Item>Security</C.Item>
        <C.Item>Embedded</C.Item>
        <C.Item>AI</C.Item>
      </C.ItemContainer>

      <C.Line />
    </C.Wrapper>
  );
};

export default CategoryDropdown;
