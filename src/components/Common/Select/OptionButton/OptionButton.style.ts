import styled, { css } from "styled-components";

interface IOptionButtonBoxProps {
  isSelected: boolean;
}

export const OptionButtonBox = styled.div<IOptionButtonBoxProps>`
  width: 416px;
  display: flex;
  padding: 10px 12px;
  box-sizing: border-box;
  border-radius: 5px;
  cursor: pointer;
  align-items: center;

  ${(props) =>
    props.isSelected
      ? css`
          background-color: ${props.theme.color.main_yellow_color};
          color: ${(props) => props.theme.color.gray_color1};
          border: 1px solid ${(props) => props.theme.color.main_yellow_color};
        `
      : css`
          background-color: ${props.theme.color.gray_color1};
          color: ${(props) => props.theme.color.gray_color5};
          border: 1px solid ${(props) => props.theme.color.gray_color3};
        `}
`;

export const OptionButtonBoxText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: ${(props) => props.theme.fontSize.body_medium};
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

export const OptionButtonCheckRect = styled.img<{ isSelected: boolean }>`
  width: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;

  display: ${(props) => !props.isSelected && "none"};
`;
