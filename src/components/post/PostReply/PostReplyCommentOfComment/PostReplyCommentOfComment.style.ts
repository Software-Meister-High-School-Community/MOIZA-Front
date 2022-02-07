import styled from "styled-components";

export const PostReplyCOCBox = styled.div`
  //comment of comment
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.color.gray_color3};
  background-color: ${(props) => props.theme.color.gray_color1};
  border-radius: 5px;
  margin-bottom: 20px;
`;
export const PostReplyCOCInputWrap = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 12px;
    color: ${(props) => props.theme.color.gray_color4};
  }
`;

export const PostReplyCommentWrap = styled.div``;
