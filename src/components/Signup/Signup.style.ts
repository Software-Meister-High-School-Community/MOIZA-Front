import styled from "styled-components";

export const SignupBox = styled.div`
  width: 1024px;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const SignupTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSize.head_small};
  line-height: 37px;
  font-style: normal;
  font-weight: bold;
  margin-right: auto;
`;

export const SignupMiddleWrap = styled.div`
  display: flex;
  margin-top: 72px;
`;
