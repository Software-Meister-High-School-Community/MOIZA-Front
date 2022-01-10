import styled, { css } from "styled-components";

export const FindAuthDataBox = styled.div`
  width: 1024px;
  display: flex;
  flex-direction: column;
`;

export const FindAuthDataTitle = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: ${(props) => props.theme.fontSize.head_small};
  color: black;
  margin-right: auto;
`;

export const FindAuthDataFormWrap = styled.div`
  width: 718px;
  display: flex;
  flex-direction: column;
  margin: 66px auto;
  margin-bottom: 0px;
`;

export const FindAuthDataTabWrap = styled.div`
  width: 100%;
  height: 56px;
  border: 1px solid ${(props) => props.theme.color.gray_color3};
  border-bottom: 2px solid ${(props) => props.theme.color.main_blue_color};
  display: flex;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;
  box-sizing: border-box;
`;

export const FindAuthDataTab = styled.button<{ seleted: boolean }>`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: 0px;
  cursor: pointer;
  padding: 0px;
  font-size: ${(props) => props.theme.fontSize.body_large};

  ${(props) =>
    props.seleted
      ? css`
          background-color: ${props.theme.color.main_blue_color};
          color: ${(props) => props.theme.color.gray_color1};
        `
      : css`
          background-color: ${(props) => props.theme.color.gray_color1};
          color: black;
        `};
`;

export const FindAuthDataSubmitButtonWrap = styled.div`
  margin: 0px auto;
  margin-top: 50px;
  display: flex;
  column-gap: 34px;
`;
