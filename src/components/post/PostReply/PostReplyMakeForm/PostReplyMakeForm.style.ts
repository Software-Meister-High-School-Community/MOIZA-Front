import styled from "styled-components";

export const PostReplyMakeFormBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  p {
    font-size: ${(props) => props.theme.fontSize.body_medium};
    color: ${(props) => props.theme.color.gray_color4};
  }
`;

export const PostReplyMakeFormHeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: ${(props) => props.theme.fontSize.head_small};
    color: black;
    font-style: normal;
    font-weight: normal;
  }
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
  margin-top: 40px;
  margin-bottom: 16px;
  outline: none;
`;

export const PostReplyMakeFormCountText = styled.p`
  font-size: ${(props) => props.theme.fontSize.body_medium};
  color: ${(props) => props.theme.color.gray_color4};
  text-align: end;
`;
