import styled from "styled-components";

export const Radios = styled.section`
  display: flex;
`;

export const Wrapper = styled.label`
  display: flex;
  align-items: center;
  margin-right: 55px;
  > p {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #555555;
    margin-left: 10px;
    display: flex;
    align-items: center;
  }
`;

export const RadioButtonRect = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.color.gray_color3};
  cursor: pointer;
`;

export const RadioButtonBox = styled.input<{ checked: boolean }>`
  margin: 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  vertical-align: middle;
  border: none;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
  :checked {
    background-color: ${(props) => props.theme.color.main_yellow_color};
  }
`;
