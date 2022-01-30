import styled from "styled-components";

export const LoginFormBox = styled.div`
  width: 717px;
  height: 510px;
  background-color: ${(props) => props.theme.color.gray_color1};
  margin: 0px auto;
  margin-top: 66px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.color.gray_color3};
  margin-bottom: 90px;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.color.gray_color4};
  }
`;

export const LoginFormInputWrap = styled.div`
  width: 340px;
  display: flex;
  flex-direction: column;
`;

export const LoginFormTextInputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const LoginFormInputTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSize.body_large};
  line-height: 21px;
  font-style: normal;
  font-weight: normal;
`;

export const LoginFormTextInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.color.gray_color2};
  border: 1px solid ${(props) => props.theme.color.gray_color3};
  margin-bottom: 58px;
  margin-top: 13px;
  outline: none;
  padding: 9px 12px;
  box-sizing: border-box;
  font-size: ${(props) => props.theme.fontSize.body_medium};
  color: #707070;
`;

export const LoginFormPasswordInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.color.gray_color2};
  border: 1px solid ${(props) => props.theme.color.gray_color3};
  outline: none;
  padding: 9px 12px;
  box-sizing: border-box;
  font-size: ${(props) => props.theme.fontSize.body_medium};
  color: ${(props) => props.theme.color.gray_color5} !important;
`;

export const LoginFormPasswordInputWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 13px;
`;

export const LoginFormSaveInputWrap = styled.div`
  width: 100%;
  margin-top: 14px;
  display: flex;
  align-items: center;
  column-gap: 7px;
  font-size: ${(props) => props.theme.fontSize.body_small};
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  margin-bottom: 70px;
`;

export const LoginFormSaveCheckButtonRect = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${(props) => props.theme.color.main_yellow_color};
  border-radius: 100px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const LoginFormSaveCheckButton = styled.div<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 100px;
  border: 1px solid ${(props) => props.theme.color.gray_color3};
  box-sizing: border-box;
  cursor: pointer;
  position: relative;

  ${LoginFormSaveCheckButtonRect} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

export const LoginFormCategoryInputWrap = styled.div`
  width: 100%;
  display: flex;
  column-gap: 13px;
`;

export const LoginFormCategoryInput = styled.button`
  height: 16px;
  padding: 0px;
  font-size: ${(props) => props.theme.fontSize.body_small};
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  outline: none;
  background: none;
  cursor: pointer;
  color: ${(props) => props.theme.color.gray_color4};

  &:first-child {
    margin-left: auto;
  }

  &:last-child {
    margin-right: auto;
  }
`;

export const LoginFormCategoryInputLine = styled.div`
  height: 16px;
  border-right: 0.5px solid ${(props) => props.theme.color.gray_color4};
`;
