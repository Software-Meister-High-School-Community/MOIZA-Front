import styled from "styled-components";

export const RadioButtonRect = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${(props) => props.theme.color.main_yellow_color};
  border-radius: 100px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const RadioButtonBox = styled.div<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 100px;
  border: 1px solid ${(props) => props.theme.color.gray_color3};
  box-sizing: border-box;
  cursor: pointer;
  position: relative;

  ${RadioButtonRect} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;
