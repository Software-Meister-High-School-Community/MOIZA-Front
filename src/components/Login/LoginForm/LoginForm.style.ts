import styled from "styled-components";

export const LoginFormBox = styled.div`
  width: 717px;
  height: 510px;
  background-color: #ffffff;
  margin: 0px auto;
  margin-top: 66px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e0e0e0;
`;

export const LoginFormInputWrap = styled.div`
  width: 340px;
  display: flex;
  flex-direction: column;
`;

export const LoginFormInputTitle = styled.h1`
  font-size: 18px;
  line-height: 21px;
  font-style: normal;
  font-weight: normal;
`;

export const LoginFormInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  margin-bottom: 58px;
  margin-top: 13px;
  outline: none;
  padding: 9px 12px;
  box-sizing: border-box;
  font-size: 16px;

  &:last-child {
    margin-bottom: 0px;
  }
`;

export const LoginFormSaveInputWrap = styled.div`
  width: 100%;
  margin-top: 14px;
  display: flex;
`;

export const LoginFormSaveCheckButtonWrap = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const LoginFormSaveCheckButtonRect = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${(props) => props.theme.main_yellow_color};
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
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;

  ${LoginFormSaveCheckButtonRect} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;
