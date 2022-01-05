import styled, { css } from "styled-components";

interface IBlueButtonBoxProps {
  big: boolean;
  yellow?: boolean;
  blue?: boolean;
}

export const SubmitButtonBox = styled.button<IBlueButtonBoxProps>`
  ${(props) =>
    props.big
      ? css`
          height: 50px;
          font-size: ${props.theme.fontSize.button_large};
        `
      : css`
          height: 34px;
          font-size: ${props.theme.fontSize.head_small};
        `};

  ${(props) =>
    props.yellow &&
    css`
      background-color: ${(props) => props.theme.color.main_yellow_color};
    `
  }

  ${(props) =>
    props.blue &&
    css`
      background-color: ${(props) => props.theme.color.main_blue_color};
    `
  };

  ${(props) =>
    props.yellow &&
    props.disabled &&
    css`
      background-color: ${(props) => props.theme.color.secondary_yellow_color}
    `
  }

  ${(props) =>
    props.blue &&
    props.disabled &&
    css`
      background-color: ${(props) => props.theme.color.secondary_blue_color}
    `
  }


  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.color.gray_color1};
  border-radius:25px
  cursor: pointer;
`;
