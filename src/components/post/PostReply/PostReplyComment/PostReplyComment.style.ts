import styled, { css } from "styled-components";

export const PostReplyCommentBox = styled.div<{ fold: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.color.gray_color3};
  background-color: ${(props) => props.theme.color.gray_color1};
  padding: 30px;
  box-sizing: border-box;
  border-radius: 5px;

  ${(props) =>
    props.fold
      ? css`
          margin-bottom: 30px;
        `
      : css`
          margin-bottom: 20px;
        `}
`;

export const PostReplyCommentHeaderWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 40px;
  margin-bottom: 20px;
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
  margin-left: 15px;

  span {
    font-size: ${(props) => props.theme.fontSize.body_medium};

    strong {
      color: black;
    }
  }
`;

export const PostReplyCommentBreakPoint = styled.div`
  width: 4px;
  height: 4px;
  background-color: ${(props) => props.theme.color.gray_color5};
  border-radius: 100px;
  margin: 0px 20px;
`;

export const PostReplyCommentDate = styled.p`
  font-size: ${(props) => props.theme.fontSize.body_small};
  margin-left: auto;
  color: ${(props) => props.theme.color.gray_color4};
`;

export const PostReplyCommentMenuButton = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 0px;
  outline: none;
  cursor: pointer;
  margin-left: 25px;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const PostReplyCommentMiddleWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const PostReplyCommentContentText = styled.p<{ withPicture: boolean }>`
  width: 100%;
  color: black;
  font-size: ${(props) => props.theme.fontSize.body_large};
  word-break: break-all;
  font-style: normal;
  font-weight: normal;
  line-height: 30px;

  ${(props) => props.withPicture && "margin-bottom : 46px"}
`;

export const PostReplyCommentBottomWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const PostReplyCommentCommentWrap = styled.div`
  display: flex;
  font-size: ${(props) => props.theme.fontSize.body_medium};
  color: ${(props) => props.theme.color.gray_color5};
  font-weight: 400;
  column-gap: 8px;
  align-items: center;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
    object-fit: scale-down;
  }
`;

export const PostReplyCommentLine = styled.hr`
  width: 100%;
  margin: 50px 0px;
  border: 0px;
  border-top: 1px solid ${(props) => props.theme.color.gray_color3};
`;
