import styled from "styled-components";

export const PostReplyMakeFormBox = styled.div`
  width: 100%;
  display: flex;
`;

export const PostReplyMakeFormTextarea = styled.textarea`
  width: 100%;
  height: 490px;
  resize: none;
  background-color: ${(props) => props.theme.color.gray_color1};
  border: 1px solid ${(props) => props.theme.color.gray_color3};
  padding: 30px;
  box-sizing: border-box;
  border-radius: 5px;
  color: ${(props) => props.theme.color.gray_color5};
  font-size: ${(props) => props.theme.fontSize.body_large};
`;
