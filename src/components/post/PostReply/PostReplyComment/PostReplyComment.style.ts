import styled from "styled-components";

export const PostReplyCommentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.color.gray_color3};
  background-color: ${(props) => props.theme.color.gray_color1};
  margin-bottom: 30px;
  padding: 30px;
  box-sizing: border-box;
`;

export const PostReplyCommentHeaderWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 40px;
`;

export const PostReplyCommentProfileImg = styled.img`
  width: 40px;
  height: 40px;
  background-color: #dcdcdc;
  border-radius: 100px;
`;

export const PostReplyCommentWriterWrap = styled.p`
  display: flex;
  align-items: center;
`;
