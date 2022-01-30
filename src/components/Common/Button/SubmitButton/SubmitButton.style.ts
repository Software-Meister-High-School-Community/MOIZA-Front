import styled, { css } from "styled-components";

interface ISubmitButtonBoxProps {
  big: boolean | undefined;
  yellow?: boolean;
  blue?: boolean;
}

export const SubmitButtonBox = styled.button<ISubmitButtonBoxProps>`
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.color.gray_color3};
  background-color: ${(props) => props.theme.color.gray_color1};
  color: ${(props) => props.theme.color.gray_color4};

  ${(props) =>
    props.big
      ? css`
          height: 50px;
          font-size: ${props.theme.fontSize.button_large};
        `
      : css`
          height: 34px;
          font-size: ${props.theme.fontSize.button_small};
        `};

  ${(props) =>
    props.yellow &&
    css`
      color: ${(props) => props.theme.color.gray_color1};
      background-color: ${(props) => props.theme.color.main_yellow_color};
      border: 0px;
    `}

  ${(props) =>
    props.blue &&
    css`
      color: ${(props) => props.theme.color.gray_color1};
      background-color: ${(props) => props.theme.color.main_blue_color};
      border: 0px;
    `};

  ${(props) =>
    props.yellow &&
    props.disabled &&
    css`
      background-color: ${(props) => props.theme.color.secondary_yellow_color};
      color: rgba(255, 255, 255, 0.5);
      cursor: default;
    `}

  ${(props) =>
    props.blue &&
    props.disabled &&
    css`
      background-color: ${(props) => props.theme.color.secondary_blue_color};
      color: rgba(255, 255, 255, 0.5);
      cursor: default;
    `}


  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  padding: 13px 16px;
  font-weight: bold;

  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${(props) => props.theme.color.gray_color1};
  }
`;
