import styled from "styled-components";

export const GraduateCheckGuideBox = styled.div`
  width: 718px;
  height: auto;
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.color.gray_color3};
  background-color: ${(props) => props.theme.color.gray_color1};
`;

export const GraduateCheckGuidebachelorCapImg = styled.img`
  width: 45px;
  object-fit: scale-down;
  margin-bottom: 34px;
`;

export const GraduateCheckGuideTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSize.body_large};
  color: ${(props) => props.theme.color.gray_color5};
  font-style: normal;
  font-weight: normal;
`;

export const GraduateCheckGuideExplain = styled.p`
  color: ${(props) => props.theme.color.gray_color4};
  font-size: ${(props) => props.theme.fontSize.body_small};
  line-height: 20px;
  font-style: normal;
  font-weight: 500;
`;

export const GraduateCheckGuideLimitList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 17px;

  li {
    font-size: ${(props) => props.theme.fontSize.body_small};
    color: ${(props) => props.theme.color.gray_color4};
  }
`;
