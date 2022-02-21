import styled from "styled-components";

export const TextInputWrap = styled.div<{ margin?: string }>`
  position: relative;
  ${(props) => props.margin && `margin : ${props.margin}`}
`;

export const TextInputInput = styled.input<{ width?: string }>`
  width: 100%;
  ${(props) => props.width && `width : ${props.width}px`};
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
