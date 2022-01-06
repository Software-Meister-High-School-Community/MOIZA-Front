import styled from "styled-components";

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
