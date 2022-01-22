import styled from "styled-components";

export const FindIdCertificationBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FindIdCertifiationTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSize.body_large};
  color: black;
  font-style: normal;
  font-weight: normal;
  margin-bottom: 68px;
`;

export const FindIdCertificationInputWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 40px;
`;
