import styled, { css } from "styled-components";

export const FindPwFormBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.color.gray_color3};
  border-top: 0px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.color.gray_color1};
  padding: 58px 84px;
`;

export const FindPwFormWrap = styled.div`
  width: 550px;
  display: flex;
  flex-direction: column;
`;

export const FindPwFormTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSize.body_large};
  font-style: normal;
  font-weight: normal;
  color: black;
  margin-right: auto;
`;

export const FindPwFormInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  margin-top: 42px;
`;

export const FindPwFormTextInputWrap = styled.div`
  width: 500px;
  height: 40px;
  display: flex;
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0px;
  }
`;

export const FindPwFormTextInput = styled.input<{ isWrite: boolean }>`
  width: 100%;
  height: 100%;
  border: 1px solid ${(props) => props.theme.color.gray_color3};
  background-color: ${(props) => props.theme.color.gray_color2};
  box-sizing: border-box;
  padding: 11px 10px;
  color: ${(props) =>
    props.isWrite
      ? props.theme.color.gray_color5
      : props.theme.color.gray_color4};
  font-size: ${(props) => props.theme.fontSize.body_medium};
  outline: none;
  border-radius: 5px;
`;

export const FindPwFormCertificationButton = styled.button<{
  isWrite: boolean;
}>`
  min-width: 139px;
  height: 100%;
  background-color: ${(props) => props.theme.color.gray_color1};
  border: 1px solid ${(props) => props.theme.color.gray_color3};
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.fontSize.body_medium};
  margin-left: 10px;

  ${(props) =>
    props.isWrite
      ? css`
          color: black;
          cursor: pointer;
        `
      : css`
          color: ${(props) => props.theme.color.gray_color3};
          cursor: default;
        `}
`;
