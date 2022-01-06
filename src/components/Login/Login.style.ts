import styled from "styled-components";

export const LoginBox = styled.div`
  width: 1024px;
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const LoginTitle = styled.h1`
  font-style: normal;
  font-size: ${(props) => props.theme.fontSize.head_small};
  line-height: 37px;
  color: black;
  font-weight: bold;
  margin-right: auto;
  margin-bottom: auto;
`;

export const LoginSubmitButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
