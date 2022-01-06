import styled from "styled-components";

export const SignupTermsFormBox = styled.div`
  width: 718px;
  height: 671px;
  display: flex;
  padding: 67px;
  box-sizing: border-box;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.color.gray_color3};
  background-color: ${(props) => props.theme.color.gray_color1};
`;

export const SignupTermsFormTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSize.body_large};
  font-style: normal;
  font-weight: normal;
  margin-bottom: 19px;
`;

export const SignupTermsFormTextWrap = styled.div`
  width: 100%;
  height: 260px;
  background-color: #ececec;
  overflow-y: scroll;
  word-break: break-all;

  ::-webkit-scrollbar {
    display: none;
  }
`;
