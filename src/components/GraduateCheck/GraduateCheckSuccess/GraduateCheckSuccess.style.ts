import styled from "styled-components";

export const GraduateCheckSuccessBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 301px;
`;

export const GraduateCheckSuccessTitleWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 0px auto;
  margin-bottom: 34px;
`;

export const GraduateCheckSuccessTitle = styled.h1`
  font-size: 48px;
  font-style: normal;
  font-weight: normal;
  color: ${(props) => props.theme.color.gray_color5};
  margin-left: 26px;
  strong {
    color: black;
    font-style: normal;
    font-weight: normal;
  }
`;

export const GraduateCheckSuccessImg = styled.img`
  width: 64px;
  object-fit: scale-down;
`;

export const GraduateCheckSuccessGuideText = styled.p`
  font-size: 22px;
  color: ${(props) => props.theme.color.gray_color5};
  text-align: center;
  line-height: 25px;
  margin: 0px auto;
  margin-bottom: 130px;
`;

export const GraduateCheckSuccessFooterWrap = styled.div`
  margin: 0px auto;
`;
