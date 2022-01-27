import styled from "styled-components";

export const GraduateCheckBox = styled.div`
  width: 1024px;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  margin-top: 120px;
`;

export const GraduateCheckTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSize.head_small};
  line-height: 37px;
  font-style: normal;
  font-weight: bold;
  margin-right: auto;
`;

export const GraduateCheckMiddleWrap = styled.div`
  display: flex;
  margin-top: 72px;
`;

export const GraduateCheckFormsWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GraduateCheckFooterWrap = styled.div`
  margin-top: 70px;
  margin-left: auto;
  display: flex;
  column-gap: 29px;
`;
