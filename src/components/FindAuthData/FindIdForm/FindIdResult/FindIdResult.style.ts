import styled from "styled-components";

export const FindIdResultTextWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FindIdResultGuideText = styled.h1`
  font-size: ${(props) => props.theme.fontSize.body_large};
  color: black;
  font-style: normal;
  font-weight: normal;
  text-align: center;

  strong {
    color: ${(props) => props.theme.color.main_blue_color};
  }
`;

export const FindIdResultIdText = styled.p`
  font-size: ${(props) => props.theme.fontSize.head_small};
  font-style: normal;
  font-weight: normal;
  color: ${(props) => props.theme.color.main_yellow_color};
  text-align: center;
  margin-top: 32px;
`;
