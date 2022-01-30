import styled from "styled-components";

export const SignupIdPwFormBox = styled.div`
  width: 718px;
  height: auto;
  padding: 50px 65px 73px 158px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.color.gray_color3};
  background-color: ${(props) => props.theme.color.gray_color1};
`;

export const SignupIdPwInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 72px;

  div {
    display: flex;
    align-items: center;
    position: relative;
  }

  &:last-child {
    margin-bottom: 0px;
  }
`;

export const SignupIdPwTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSize.body_large};
  font-style: normal;
  font-weight: normal;
  color: black;
  margin-bottom: 15px;
`;

export const SignupIdPwInput = styled.input`
  width: 340px;
  height: 40px;
  border: 1px solid ${(props) => props.theme.color.gray_color3};
  box-sizing: border-box;
  border-radius: 5px;
  background-color: ${(props) => props.theme.color.gray_color2};
  outline: none;
  padding: 11px 12px;
  color: ${(props) => props.theme.color.gray_color5};
  font-size: ${(props) => props.theme.fontSize.body_medium};
`;

export const SignupIdPwDoubleCheckButton = styled.button<{ enabled: boolean }>`
  width: 139px;
  height: 40px;
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  background-color: ${(props) => props.theme.color.gray_color1};
  border: 1px solid ${(props) => props.theme.color.gray_color3};
  color: ${(props) =>
    props.enabled ? "black" : props.theme.color.gray_color3};
  font-style: normal;
  font-weight: normal;
  font-size: ${(props) => props.theme.fontSize.body_medium};
  margin-left: 16px;
  cursor: ${(props) => (props.enabled ? "pointer" : "default")};
`;

export const SignupIdPwGuideText = styled.p`
  font-size: ${(props) => props.theme.fontSize.body_small};
  color: ${(props) => props.theme.color.gray_color5};
  font-style: normal;
  font-weight: normal;
  margin-top: 10px;
`;
