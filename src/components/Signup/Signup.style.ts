import styled from "styled-components";

export const SignupBox = styled.div`
  width: 1024px;
  height: auto;
  display: flex;
  flex-direction: column;

  a {
    margin-left: auto;
    border-radius: 25px;
    margin-top: 114px;
    text-decoration: none;
  }
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

export const SignupNextButton = styled.button`
  width: 111px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0px;
  font-size: ${(props) => props.theme.fontSize.button_large};
  border: 0px;
  background-color: ${(props) => props.theme.color.main_blue_color};
  border-radius: 25px;
  margin-top: 114px;
  margin-left: auto;
  font-style: normal;
  font-weight: bold;
  cursor: pointer;
  overflow: hidden;
`;
