import SVG from 'react-inlinesvg';
import { Link } from "react-router-dom";
import styled from "styled-components";

interface StyleProps {
  isDisplay: string;
}

interface SVGStyleProps {
  color?: string;
}

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.theme.color.gray_color1};
`;
export const StyleLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.color.gray_color6};
  cursor: pointer;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const LogoImg = styled.img`
  width: 113px;
  height: 20px;
`;

export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  width: 94px;
  justify-content: space-evenly;
`;

export const CategoryImg = styled.img`
  width: 24px;
`;
export const CategoryText = styled.p`
  font-size: ${(props) => props.theme.fontSize.body_medium};
  text-decoration: none;
`;
export const ItemContainer = styled.div`
  display: flex;
  width: 270px;
  justify-content: space-between;
`;

export const ItemImg = styled(SVG) <SVGStyleProps>`
  cursor: pointer;
  & path{
    fill: ${(props) => props.color}
  }
  `;
export const AuthContainer = styled.div`
  display: flex;
  width: 120px;
  justify-content: space-between;
`;

export const AuthText = styled.a`
  font-size: ${(props) => props.theme.fontSize.body_medium};
  cursor: pointer;
`;
