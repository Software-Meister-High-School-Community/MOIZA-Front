import { REPL_MODE_SLOPPY } from "repl";
import styled, { css } from "styled-components";

export const SignupFormBox = styled.div`
  width: 718px;
  height: auto;
  padding: 73px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.color.gray_color3};
  background-color: ${(props) => props.theme.color.gray_color1};
`;

export const SignupFormTitle = styled.h1<{ marginBottom: number }>`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: black;
  margin-bottom: ${(props) => props.marginBottom}px;
`;

export const SignupFormFlexWrap = styled.div`
  display: flex;
  margin-bottom: 75px;
  align-items: center;
`;

export const SignupFormRadioButtonWrap = styled.div<{ marginLeft?: number }>`
  display: flex;
  column-gap: 11px;
  align-items: center;
  ${(props) =>
    props.marginLeft &&
    css`
      margin-left: ${props.marginLeft}px;
    `}

  &:last-child {
    margin-left: 50%;
  }
`;

export const SignupFormRadioButtonText = styled.p`
  font-size: ${(props) => props.theme.fontSize.body_medium};
  color: black;
`;

export const SignupFormTextInput = styled.input<{ width: string }>`
  width: ${(props) => props.width};
  height: 40px;
  border: 1px solid ${(props) => props.theme.color.gray_color3};
  box-sizing: border-box;
  border-radius: 5px;
  background-color: ${(props) => props.theme.color.gray_color2};
  outline: none;
  padding: 11px 12px;
  color: ${(props) => props.theme.color.gray_color5};
  font-size: ${(props) => props.theme.fontSize.body_medium};
  margin-bottom: 70px;

  &:last-child {
    margin-bottom: 0px;
  }
`;

export const SignupFormBirthTitleWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 13px;
`;

export const SignupFormBirthTitle = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: black;
`;

export const SignupFormGuideBirthRule = styled.p`
  color: ${(props) => props.theme.color.gray_color4};
  font-size: ${(props) => props.theme.fontSize.body_small};
  font-style: normal;
  font-weight: normal;
  margin-left: 90px;
`;

export const SignupFormSchoolWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  margin-bottom: 95px;
`;

export const SignupFormSchoolButton = styled.button`
  display: inline-block;
  justify-content: start;
  border: 0px;
  outline: none;
  background: none;
  margin-right: auto;
  padding: 0px;
`;

export const SignupFormSchoolMailText = styled.p`
  min-width: 139px;
  color: ${(props) => props.theme.color.gray_color5};
  font-size: ${(props) => props.theme.fontSize.body_medium};
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  margin: 0px 10px;
`;

export const SignupFormSubmitButton = styled.button<{ isGraduate?: boolean }>`
  min-width: 139px;
  height: 40px;
  border: 1px solid ${(props) => props.theme.color.gray_color3};
  box-sizing: border-box;
  background-color: ${(props) => props.theme.color.gray_color1};
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  outline: none;
  border-radius: 5px;
  ${(props) =>
    props.isGraduate &&
    css`
      margin-left: 36px;
    `}
`;

export const SignupFormAlertText = styled.p`
  color: ${(props) => props.theme.color.gray_color5};
  font-style: normal;
  font-weight: normal;
  font-size: ${(props) => props.theme.fontSize.body_large};
`;
